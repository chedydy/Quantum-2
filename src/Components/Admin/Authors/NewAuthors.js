import React, { Component } from "react";
import { connect } from "react-redux";
import { SubmitButton } from "../../Common";
import { AuthorForm } from "./AuthorForm";
import { AuthorsActions } from "../../../Actions";
import uuid from "uuid/v4";
import "./EditAuthors.css";

class NewAuthorClass extends Component {
  onSubmit() {
    const selected = this.props.selected;
    selected.id = uuid();
    return this.props.image
      ? this.props.saveWithImage(selected, this.props.image)
      : this.props.save(selected);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.onSubmit().then(() => {
      this.props.history.push("/admin/authors/");
    });
  };

  render() {
    return (
      <div className="container">
        <div className="justify-content-center">
          <div className="col">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <AuthorForm />
              <br />
              <div className="row justify-content-end col">
                <SubmitButton className="fa fa-save fa-3x save-button" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { selected: state.Authors.selected, image: state.Authors.image };
}
const NewAuthor = connect(mapStateToProps, {
  save: AuthorsActions.save,
  saveWithImage: AuthorsActions.saveWithImage
})(NewAuthorClass);

export { NewAuthor, NewAuthorClass };
