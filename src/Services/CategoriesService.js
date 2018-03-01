import _ from "lodash";
import { app } from "../firebase/firebase";
const categoriesRef = app.ref().child("categories");
function mapCategory(value, id, categories) {
  if (value !== true) {
    categories.push(id);
    _.forEach(value, (val, key) => {
      mapCategory(val, `${id}-${key}`, categories);
    });
  }
}
const CategoriesService = {
  subscribe(callback) {
    categoriesRef.on(
      "value",
      snapshot => {
        const categories = [];
        _.forEach(snapshot.val(), (val, id) => {
          mapCategory(val, id, categories);
        });
        callback(categories);
      },
      error => {
        console.log(error);
      }
    );
  },
  subscribeRaw(callback) {
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
  add(category, path) {
    categoriesRef.child(path.replace("-", "/")).update({
      [category]: true
    });
  },
  update({ oldCategory, category, id }) {
    const oldCategoryNode = oldCategory.replace("-", "/");
    const categoryNode = category.replace("-", "/");
    categoriesRef.child(`${oldCategoryNode}/${id}`).remove();
    categoriesRef.child(categoryNode).update({
      [id]: true
    });
  },
  delete(categoryPath) {
    const categoryNode = categoryPath.replace("-", "/");
    return categoriesRef.child(categoryNode).remove();
  },
  update(categories) {
    return categoriesRef.update(categories);
  }
};

export { CategoriesService };
