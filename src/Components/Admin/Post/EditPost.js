import { connect } from "react-redux";
import { PostEditorActions } from "../../../Actions";
import "./EditPost.css";

import { NewPostClass } from "./NewPost";

class EditPostClass extends NewPostClass {
  onInit() {
    var id = this.props.match.params.id;
    this.props.get(id);
  }
  onSubmit() {
    const { preview, post } = this.props.selected;
    const promise = this.props.image
      ? this.props.saveWithImage(preview, post, this.props.image)
      : this.props.save(preview, post);
    promise.then(() => {
      this.props.history.push("/admin/posts");
    });
  }
}

function mapStateToProps(state) {
  return {
    image: state.PostEditor.image,
    showPreview: state.PostEditor.showPreview,
    selected: state.PostEditor.selected
  };
}
const EditPost = connect(mapStateToProps, {
  get: PostEditorActions.get,
  save: PostEditorActions.save,
  saveWithImage: PostEditorActions.saveWithImage,
  togglePreview: PostEditorActions.togglePreview
})(EditPostClass);

export { EditPost };
