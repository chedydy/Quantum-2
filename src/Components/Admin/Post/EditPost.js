import { PostEditorActions } from "../../../Actions";
import { connect } from "react-redux";
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
  return { ...state.PostEditor };
}
const EditPost = connect(mapStateToProps, {
  ...PostEditorActions
})(EditPostClass);

export { EditPost };
