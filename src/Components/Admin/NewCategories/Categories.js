import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { LinkButton } from "../../Common";
import { CategoryItem } from "./CategoryItem";
import { CategoriesActions } from "../../../Actions";
import "./CategoriesItem.css";
import "./Categories.css";
class CategoriesClass extends Component {
  componentWillMount() {
    this.props.subscribe();
  }
  renderPostsPreview() {
    const items = _.map(this.props.filteredCategories, (val, index) => {
      return (
        <div key={index}>
          <CategoryItem category={index} />
          <hr />
        </div>
      );
    });
    return items;
  }
  filter(filterText) {
    this.props.filter(filterText);
  }
  render() {
    return (
      <div className="row justify-content-center align-items-center">
        <div className="col-11">
          <div
            className="row justify-content-center"
            style={{
              marginBottom: "30px",
              marginTop: "30px",
              fontWeight: "bold",
              fontSize: "25px",
              border: "2px solid #0085A1"
            }}
          >
            <div
              className="col-4 text-left align-self-center header"
              //   onClick={() => this.props.sortBy("title")}
            >
              Name
            </div>

            <div className="col-3 text-left align-self-center search-header">
              <i className="fas fa-search" />
              <input
                className="search"
                placeholder="Search..."
                onChange={e => {
                  this.props.filter(e.target.value);
                }}
              />
            </div>
          </div>
          {this.renderPostsPreview()}
          <div className="row justify-content-center">
            <div className="col-3 offset-8 align-self-center">
              <div className="row">
                <LinkButton link={`/admin/categories/new`}>
                  New Category
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filteredCategories: state.Categories.filteredCategories,
    filter: state.Categories.filter
  };
}
const Categories = connect(mapStateToProps, {
  subscribe: CategoriesActions.subscribe,
  filter: CategoriesActions.filter,
  delete: CategoriesActions.delete,
  new: CategoriesActions.new
})(CategoriesClass);

export { Categories };
