import _ from "lodash";
import { app } from "../firebase/firebase";
const categoriesRef = app.ref().child("categories");

const CategoriesService = {
  subscribe(callback) {
    categoriesRef.on(
      "value",
      snapshot => {
        callback(snapshot.val());
      },
      error => {
        console.log(error);
      }
    );
  },
  get() {
    return new Promise((resolve, reject) => {
      categoriesRef
        .once("value")
        .then(snapshot => {
          const categories = snapshot.val();
          resolve(categories);
        })
        .catch(reject);
    });
  },
  getCategory(category) {
    return new Promise((resolve, reject) => {
      categoriesRef
        .child(category)
        .once("value")
        .then(snapshot => {
          resolve({ subCategories: snapshot.val(), name: category });
        })
        .catch(reject);
    });
  },
  add(category) {
    return categoriesRef.child(category.name).update(category.subCategories);
  },
  delete(category) {
    return categoriesRef.child(category).remove();
  },
  update(category) {
    return categoriesRef.child(category.name).update(category.subCategories);
  }
};

export { CategoriesService };
