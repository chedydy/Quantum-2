import React, { Component } from "react";
import _ from "lodash";
import { IconInput, ActionIconInput, Button } from "../../Common";
import { connect } from "react-redux";
import { CategoriesActions } from "../../../Actions";
import "./EditCategory.css";

class CategoryFormClass extends Component {
  renderSubs() {
    const subs = _.map(this.props.subCategories, (category, index) => {
      return (
        <div key={index}>
          <ActionIconInput
            placeholder="Subcategory Name"
            label="Subcategory"
            type="text"
            value={this.props.subCategories[index]}
            onChange={value => this.props.editSubcategory(index, value)}
            action={() => this.props.removeSubcategory(index)}
            faIcon="fa-angle-right"
            faActionIcon="fa-trash"
          />
        </div>
      );
    });
    return subs;
  }
  render() {
    return (
      <div className="categoryForm color-p">
        <ActionIconInput
          placeholder="Category name"
          label="Category name"
          type="text"
          value={this.props.name}
          onChange={value => this.props.editName(value)}
          faIcon="fa-angle-double-down"
          faActionIcon="fa-plus-circle"
          action={() => this.props.addSubcategory()}
        />
        {this.renderSubs()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { ...state.Categories.selected };
}
const CategoryForm = connect(mapStateToProps, {
  editName: CategoriesActions.editName,
  editSubcategory: CategoriesActions.editSubcategory,
  addSubcategory: CategoriesActions.addSubcategory,
  removeSubcategory: CategoriesActions.removeSubcategory
})(CategoryFormClass);

export { CategoryForm };
