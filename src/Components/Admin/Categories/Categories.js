import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Container } from "../../Common";
import { Category } from "./Category";
import { NewCategory } from "./NewCategory";
import { AlertModal } from "./AlertModal";
import { CategoriesActions } from "../../../Actions";

class CategoriesClass extends Component {
  componentWillMount() {
    this.props.get();
  }

  createCategories(categories, isFirst, parent) {
    return _.map(categories, (val, key) => {
      if (key === "Placeholder") {
        return (
          <NewCategory
            key={key}
            name={val}
            isFirst={isFirst}
            parent={`${parent} ${key}`}
          />
        );
      }
      return (
        <Category
          key={key}
          name={key}
          isFirst={isFirst}
          parent={`${parent} ${key}`}
        >
          {val === true
            ? ""
            : this.createCategories(val, false, `${parent} ${key}`)}
        </Category>
      );
    });
  }

  renderCategories() {
    const { categories } = this.props;
    const items = this.createCategories(categories, true, "");
    return items;
  }

  render() {
    return (
      <div>
        <AlertModal isOpen={this.props.showAlert} />
        <Container>
          <br />
          <button
            className="btn btn-primary"
            onClick={() => this.props.new("root")}
          >
            Add Category
          </button>
          <br />
          <br />
          {this.renderCategories()}
          <br />
          <button
            className="btn btn-primary"
            onClick={() => this.props.update(this.props.categories)}
            style={{ display: this.props.edit ? "inline" : "none" }}
          >
            Update
          </button>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.Categories };
}
const Categories = connect(mapStateToProps, {
  get: CategoriesActions.get,
  new: CategoriesActions.new,
  update: CategoriesActions.update
})(CategoriesClass);

export { Categories };
