import { connect } from "react-redux";
import { AuthorsActions } from "../../../Actions";
import { NewAuthorClass } from "./NewAuthors";

class EditAuthorClass extends NewAuthorClass {
  componentWillMount() {
    this.props.getById(this.props.match.params.id);
  }

  onSubmit() {
    const hasImage = this.props.image;
    return hasImage
      ? this.props.saveWithImage(this.props.selected, this.props.image)
      : this.props.save(this.props.selected);
  }
}
function mapStateToProps(state) {
  return { selected: state.Authors.selected, image: state.Authors.image };
}
const EditAuthor = connect(mapStateToProps, {
  getById: AuthorsActions.getById,
  save: AuthorsActions.save,
  saveWithImage: AuthorsActions.saveWithImage
})(EditAuthorClass);

export { EditAuthor };
