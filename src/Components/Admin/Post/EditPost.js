import { connect } from "react-redux";
import { PostEditorActions, CategoriesActions } from "../../../Actions";
import "./EditPost.css";

import { NewPostClass } from "./NewPost";

class EditPostClass extends NewPostClass {
  onInit() {
    var id = this.props.match.params.id;
    this.props.get(id);
  }

  onSubmit() {
    this.props
      .update({
        preview: this.props.preview,
        post: this.props.post,
        oldCategory: this.props.oldCategory
      })
      .then(() => {
        this.props.history.push("/admin/posts/");
      });
  }
}
function mapStateToProps(state) {
  return {
    ...state.PostEditor,
    categories: state.Categories.categories
  };
}
const EditPost = connect(mapStateToProps, {
  ...PostEditorActions,
  subscribeCategories: CategoriesActions.subscribe
})(EditPostClass);

export { EditPost };
