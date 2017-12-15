import {app} from '../firebase/firebase';
import uuid from "uuid/v4";
import _ from 'lodash';

const postsRef = app
  .ref()
  .child('posts');

const posts = [
  {
    id: '1',
    content: `Never in all their history have men been able truly to
      conceive of the world as one: a single sphere, a globe, having
      the qualities of a globe, a round earth in which all the
      directions eventually meet, in which there is no center
      because every point, or none, is center — an equal earth which
      all men occupy as equals. The airman's earth, if free men make
      it, will be truly round: a globe in practice, not in theory.
      
  Science cuts two ways, of course; its products can be used for
      both good and evil. But there's no turning back from science.
      The early warnings about technological dangers also come from
      science.
      
  What was most significant about the lunar voyage was not that
      man set foot on the Moon but that they set eye on the earth.

  A Chinese tale tells of some men sent to harm a young girl
      who, upon seeing her beauty, become her protectors rather than
      her violators. That's how I felt seeing the Earth for the
      first time. I could not help but love and cherish her.

  For those who have seen the Earth from space, and for the
      hundreds and perhaps thousands more who will, the experience
      most certainly changes your perspective. The things that we
      share in our world are far more valuable than those which
      divide us.

## The Final Frontier

  There can be no thought of finishing for ‘aiming for the
      stars.’ Both figuratively and literally, it is a task to
      occupy the generations. And no matter how much progress one
      makes, there is always the thrill of just beginning.

> The dreams of yesterday are the hopes of today and the reality
      of tomorrow. Science has not yet mastered prophecy. We predict
      too much for the next year and yet far too little for the next
      ten.

Spaceflights cannot be stopped. This is not the work of any
      one man or even a group of men. It is a historical process
      which mankind is carrying out in accordance with the natural
      laws of human development.

## Reaching for the Stars

As we got further and further away, it the Earth diminished
      in size. Finally it shrank to the size of a marble, the most
      beautiful you can imagine. That beautiful, warm, living object
      looked so fragile, so delicate, that if you touched it with a
      finger it would crumble and fall apart. Seeing this has to
      change a man.

![pasari](http://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-300mmf_35-56g_ed_vr/img/sample/sample4_l.jpg "Title")
>> To go places and do things that have never been done before –
      that’s what living is all about.

Space, the final frontier. These are the voyages of the
      Starship Enterprise. Its five-year mission: to explore strange
      new worlds, to seek out new life and new civilizations, to
      boldly go where no man has gone before.

As I stand out here in the wonders of the unknown at Hadley, I
      sort of realize there’s a fundamental truth to our nature, Man
      must explore, and this is exploration at its greatest.

Placeholder text by [Space Ipsum](http://spaceipsum.com/ "Space Ipsum"). Photographs by [NASA on The Commons](https://www.flickr.com/photos/nasacommons/ "NASA on The Commons")`
  }, {
    id: '2'
  }, {
    id: '3'
  }, {
    id: '4'
  }
];

export default {
  getPosts : function () {
    return new Promise((resolve, reject) => {
      postsRef
        .once('value', function (snapshot) {
          resolve(snapshot.val());
        }, function (error) {
          reject(error);
        })
    });
  },
  getPost : function (id) {
    return new Promise((resolve, reject) => {
      postsRef
        .child(id)
        .once('value', function (snapshot) {
          resolve(snapshot.val());
        }, function (error) {
          reject(error);
        })
    });
  },
  addPost : function (post) {
    const id = uuid();
    return postsRef
      .child(id)
      .set({
        ...post,
        id: id
      })
  }
};
