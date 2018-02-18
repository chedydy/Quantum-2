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
  add(category, id) {
    categoriesRef.child(category.replace("-", "/")).update({
      [id]: true
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
  delete(category, id) {
    const categoryNode = category.replace("-", "/");
    return categoriesRef.child(`${categoryNode}/${id}`).remove();
  }
};

export { CategoriesService };
