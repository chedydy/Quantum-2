import { connect } from "react-redux";
import { CategoriesActions } from "../../../Actions";
import { NewCategoryClass } from "./NewCategory";

class EditCategoryClass extends NewCategoryClass {
  componentWillMount() {
    this.props.get(this.props.match.params.category);
  }

  onSubmit() {
    return this.props.update(this.props.selected);
  }
}
function mapStateToProps(state) {
  return { selected: state.Categories.selected };
}
const EditCategory = connect(mapStateToProps, {
  get: CategoriesActions.get,
  update: CategoriesActions.update
})(EditCategoryClass);

export { EditCategory };
