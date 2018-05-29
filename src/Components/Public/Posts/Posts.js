import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Category } from "./Category";
import { SubCategory } from "./SubCategory";
import { CategoryBackButton } from "./CategoryBackButton";
import { CategoryTitle } from "./CategoryTitle";
import image from "../../../img/view13.JPG";
import { PageHeader } from "../PageHeader";
import { PostsPublicActions, CategoriesActions } from "../../../Actions";
import { PostPreviewItem } from "./PostPreviewItem";
import "./Posts.css";

class PostsClass extends Component {
  componentWillMount() {
    this.props.get();
    this.props.getTags();
    this.props.subscribeCategories();
  }
  renderSubCategories() {
    const categories = [<CategoryBackButton key="back" />];
    return categories.concat(
      _.map(this.props.subCategories, subCategory => {
        return <SubCategory name={subCategory} key={subCategory} />;
      })
    );
  }
  renderCategories() {
    const categories = [];
    return categories.concat(
      _.map(this.props.categories, (subCategories, category) => {
        return <Category name={category} key={category} />;
      })
    );
  }
  renderPosts() {
    const posts = _.map(this.props.filteredPreviews, (value, key) => {
      return <PostPreviewItem post={value} key={key} />;
    });
    return posts;
  }
  renderCategoriesItems() {
    const items =
      this.props.subCategories.length === 0
        ? this.renderCategories()
        : this.renderSubCategories();
    return items;
  }
  render() {
    return (
      <div className="posts">
        <PageHeader image={image} title={"Search for posts"}>
          Posts
        </PageHeader>
        <div className="posts-container">
          <div className="posts-categories">
            <CategoryTitle />
            <div className="posts-categories-items">
              {this.renderCategoriesItems()}
            </div>

            <div className="posts-categories-items-mobile">
              {this.props.showCategories ? (
                this.renderCategoriesItems()
              ) : (
                <div />
              )}
            </div>
          </div>
          <div className="posts-list">{this.renderPosts()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.PostsPublic,
    categories: state.Categories.categories
  };
}
const Posts = connect(mapStateToProps, {
  get: PostsPublicActions.get,
  getTags: PostsPublicActions.getTags,
  subscribeCategories: CategoriesActions.subscribe
})(PostsClass);

export { Posts };
