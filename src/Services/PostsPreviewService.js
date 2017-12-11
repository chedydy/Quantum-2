import {ref} from '../firebase/firebase';

const posts = [
  {
    id: '1',
    title: "Man must explore, and this is exploration at its greatest",
    subTitle: "Problems look mighty small from 150 miles up",
    author: "Start Bootstrap",
    publishDate: "September 24, 2017",
    authorLink: '',
    imageLink: ''
  }, {
    id: '2',
    title: `I believe every human has a finite number of heartbeats. I
              don't intend to waste any of mine.`,
    author: "Start Bootstrap",
    publishDate: "September 18, 2017",
    authorLink: '',
    imageLink: ''
  }, {
    id: '3',
    title: "Science has not yet mastered prophecy",
    subTitle: `We predict too much for the next year and yet far too little
              for the next ten.`,
    author: "Start Bootstrap",
    publishDate: "August 24, 2017",
    authorLink: '',
    imageLink: ''
  }, {
    id: '4',
    title: "Failure is not an option",
    subTitle: `Many say exploration is part of our destiny, but it’s
              actually our duty to future generations.`,
    author: "Start Bootstrap",
    publishDate: "July 8, 2017",
    authorLink: '',
    imageLink: ''
  }
];

export default {

  getPreviews : function () {
    return new Promise((resolve, reject) => {
      ref
        .child('posts_preview')
        .once('value', function (snapshot) {
          resolve(snapshot.val());
        }, function (error) {
          reject(error);
        })
    });
  },

  getPreview : function (id) {
    return new Promise((resolve, reject) => {
      ref
        .child('posts_preview')
        .once('value', function (snapshot) {
          resolve(snapshot.val().child(id));
        })
      resolve(posts.find(value => {
        return value.id === id;
      }));
    });
  }
};
