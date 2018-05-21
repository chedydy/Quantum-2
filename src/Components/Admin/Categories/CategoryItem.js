import React, { Component } from "react";
import { LinkButton, Button } from "../../Common";
import { connect } from "react-redux";
import { CategoriesActions } from "../../../Actions";
import "./CategoriesItem.css";

class CategoryItemClass extends Component {
  render() {
    const { category } = this.props;
    return (
      <div className="row justify-content-center">
        <div className="col-4 text-left align-self-center">{category}</div>
        <div className="col-3 align-self-center">
          <div className="row">
            <LinkButton
              link={`/admin/categories/edit/${category}`}
              className="fa fa-pencil-square-o fa-3x edit-button margin"
            />
            <Button
              onClick={() => this.props.delete(category)}
              className="fa fa-times fa-3x save-button"
            />
          </div>
        </div>
      </div>
    );
  }
}

const CategoryItem = connect(null, {
  delete: CategoriesActions.delete
})(CategoryItemClass);

export { CategoryItem };
