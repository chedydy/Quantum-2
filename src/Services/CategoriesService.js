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
  add(category, id) {
    categoriesRef.child(category.replace("-", "/")).update({
      [id]: true
    });
  }
};

export { CategoriesService };
