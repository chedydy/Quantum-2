import React, { Component } from "react";
import { connect } from "react-redux";
import { SubmitButton } from "../../Common";
import { CategoryForm } from "./CategoryForm";
import { CategoriesActions } from "../../../Actions";
import "./EditCategory.css";

class NewCategoryClass extends Component {
  onSubmit() {
    return this.props.add(this.props.selected);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.onSubmit().then(() => {
      this.props.history.push("/admin/categories/");
    });
  };

  render() {
    return (
      <div className="container">
        <div className="justify-content-center">
          <div className="col">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <CategoryForm />
              <br />
              <div className="row justify-content-end col">
                <SubmitButton className="fa fa-floppy-o fa-3x save-button" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { selected: state.Categories.selected };
}
const NewCategory = connect(mapStateToProps, {
  add: CategoriesActions.add
})(NewCategoryClass);

export { NewCategory, NewCategoryClass };
