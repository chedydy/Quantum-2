import {Meteor} from 'meteor/meteor';
import {WebApp} from 'meteor/webapp';
import '../imports/api/users';
import {Feedbacks} from '../imports/api/feedbacks';
import {Teams} from '../imports/api/teams';
import '../imports/startup/simple-schema-configuration.js';
import {ServiceConfiguration} from 'meteor/service-configuration';
import {Accounts} from 'meteor/accounts-base';
import ldap from "ldapjs";

function handleAsync(loginRequest) {
  return new Promise((resolve, reject) => {
    var client = ldap.createClient({url: "ldap://10.12.1.147:3268/dc=grp,dc=haufemg,dc=com", reconnect: true});
    client.on("error", function (err) {
      console.log("No LDAP connection", err);
      reject(err);
    });

    var opts = {
      filter: `(&(objectclass=user)(userPrincipalName=${loginRequest.user}@haufe.com))`,
      scope: "sub",
      attributes: [
        "objectGUID",
        "displayName",
        "cn",
        "userPrincipalName",
        "department",
        "company",
        "division",
        "title",
        "manager",
        "employeeID",
        "mail",
        "thumbnailPhoto"
      ],
      reconnect: false
    };

    console.log("inainte de bind");
    client.bind(`${loginRequest.user}@grp.haufemg.com`, loginRequest.pass, function (err, response) {
      console.log("dupa bind");
      if (err) {
        console.log("No User: " + loginRequest.user + " found!");
        reject(err);
        client.unbind();
        client.destroy();
        return;
      }
      client
        .search(`dc=grp,dc=haufemg,dc=com`, opts, function (err, search) {
          console.log("dupa search");
          search.on("searchEntry", function (entry) {
            var user = entry.object;
            resolve(user);
            client.unbind();
            client.destroy();
          });
          search.on("error", function (err) {
            console.log("LDAP connection failed", err);
            reject(err);
            client.unbind();
            client.destroy();
          });
          search.on("end", function (result) {
            console.log("done ");
          });
        });
    });
  })
}

Meteor.startup(() => {
  Accounts
    .registerLoginHandler("ldap", function (loginRequest) {
      console.log(loginRequest);
      if (!loginRequest.ldap) {
        return undefined;
      }
      let userId = null;
      let stampedToken = {
        token: null
      };
      let requestSync = Meteor.wrapAsync(function (loginRequest, callback) {
        handleAsync(loginRequest)
          .then(user => callback(null, user))
          .catch(error => {
            console.log("erro!!!!!!!!!!!r", error)
            callback(error, null);
          });
      });
      try {
        let ldapUser = requestSync(loginRequest);

        var user = Meteor
          .users
          .findOne({username: loginRequest.user});
          console.log("orice")
        if (user) {
          userId = user._id;
          stampedToken = Accounts._generateStampedLoginToken();
          var hashStampedToken = Accounts._hashStampedToken(stampedToken);
          Meteor
            .users
            .update(userId, {
              $push: {
                "services.resume.loginTokens": hashStampedToken
              }
            });
        } else {
          var userObject = {
            username: loginRequest.user,
            email: ldapUser.mail,
            profile: {
              image: ldapUser.thumbnailPhoto,
              name: ldapUser.displayName
            }
          };
          userId = Accounts.createUser(userObject);
        }
      } catch (error) {
        console.log("erro!!!!!!!!!!!r2222222222222222222", error);
        return {
          userId: userId,
          error: new Meteor.Error(403, error)
        };
      }
      console.log("aici");
      return {userId: userId, token: stampedToken.token};
    });
  WebApp
    .connectHandlers
    .use((req, res, next) => {
      console.log('Server started')
      console.log('This is from my custom middleware!');
      // console.log(req.feedback, req.method, req.headers, req.query);
      const _id = req.feedback
      const feedback = Feedbacks.findOne({_id});
      if (feedback) {
        res.statusCode = 302;
        res.setHeader('Location', feedback.feedback);
        res.end();
        Meteor.call('feedbacks.trackVisit', _id);

      } else {
        next();
      }
    });
  Meteor.publish('secrets', function (group) {
    if (Roles.userIsInRole(this.userId, [
      'view-secrets', 'admin'
    ], group)) {

      return Meteor
        .secrets
        .find({group: group});

    } else {

      // user not authorized. do not publish secrets
      this.stop();
      return;

    }
  });

  // Accounts.validateNewUser(function (user) {   var loggedInUser =
  // Meteor.user();   console.log('suntem aici', loggedInUser);   if
  // (Roles.userIsInRole(loggedInUser, ['admin', 'manage-users'])) {     // NOTE:
  // This example assumes the user is not using groups.     return true;   }
  // console.log('de ce intra aici');   throw new Meteor.Error(403, "Not
  // authorized to create new users"); }); ServiceConfiguration   .configurations
  // .remove({service: "facebook"}); ServiceConfiguration   .configurations
  // .insert({service: "facebook", appId: '2007032276205840', secret:
  // '36dcb2374ed097aec7c7e8f088b6395c'}); Accounts.createUser(function (options,
  // user) {   if (!user.services.facebook) {     return user;   } user.username
  // = user.services.facebook.name; user.emails = [     { address:
  // user.services.facebook.email     }   ]; return user; });
});
