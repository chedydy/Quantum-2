import React, { Component } from "react";
import { LinkButton, Button } from "../../Common";
import { connect } from "react-redux";
import { AuthorsActions } from "../../../Actions";
import "./AuthorItem.css";

class AuthorItemClass extends Component {
  render() {
    const { author } = this.props;
    return (
      <div className="row justify-content-center">
        <div className="col-4 text-left align-self-center">{author.name}</div>
        <div className="col-3 align-self-center">
          <div className="row">
            <LinkButton
              link={`/admin/authors/edit/${author.id}`}
              className="fa fa-edit fa-3x edit-button margin"
            />
            <Button
              onClick={() => this.props.delete(author.id)}
              className="fa fa-times fa-3x save-button"
            />
          </div>
        </div>
      </div>
    );
  }
}

const AuthorItem = connect(null, {
  delete: AuthorsActions.delete
})(AuthorItemClass);

export { AuthorItem };
