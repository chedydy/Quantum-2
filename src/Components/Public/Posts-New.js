import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import _ from "lodash";
import { connect } from "react-redux";
import { Container } from "../Common";
import { Category } from "./Category";
import { Title } from "./PostTitle";
import { CategoriesNew } from "./Categories-New";
import "./PostsPreview.css";
import image from "../../img/about-bg.jpg";
import { PageHeader } from "./PageHeader";
import { PostsPublicActions } from "../../Actions";
import { PostPreviewItem } from "./PostPreviewItem-New";
import "./Posts-New.css";

class PostsClass extends Component {
  componentWillMount() {
    this.props.get();
    this.props.getTags();
    this.props.getCategories();
  }

  handleSelectChange(value) {
    const tags = value === "" ? [] : value.split(",");
    this.props.filterByTags(tags);
  }

  handleSearchChange(e) {
    const filter = e.target.value;
    this.props.filter(filter);
  }

  createCategories(categories, isFirst) {
    return _.map(categories, (val, key) => {
      if (val.id) {
        return <Title key={val.title} {...val} />;
      }
      return (
        <Category key={key} name={key} isFirst={isFirst}>
          {val === true ? "" : this.createCategories(val, false)}
        </Category>
      );
    });
  }

  //   renderCategories() {
  //     const { model } = this.props;
  //     if (_.isEmpty(model)) {
  //       return (
  //         <div>
  //           <br />
  //           <i className="far fa-frown fa-7x" />
  //           <br />
  //           <br />
  //           <span style={{ fontSize: "25px", fontWeight: "600" }}>
  //             No results were found
  //           </span>
  //         </div>
  //       );
  //     }
  //     const items = this.createCategories(model, true);
  //     return items;
  //   }

  renderCategories(categories, parentPath) {
    return _.map(categories, (value, key) => {
      const categoryPath = `${parentPath}${key}/`;
      const showChildren = this.props.selectedCategoryPath.includes(
        categoryPath
      );
      return (
        <CategoriesNew
          key={key}
          name={key}
          showChildren={showChildren}
          onClick={() =>
            showChildren
              ? this.props.unSelectCategory(key)
              : this.props.selectCategory(categoryPath)
          }
          categoryPath={categoryPath}
        >
          {this.renderCategories(value, categoryPath)}
        </CategoriesNew>
      );
    });
  }
  renderPosts() {
    return <PostPreviewItem />;
  }
  render() {
    return (
      <div>
        <PageHeader image={image} title={"Search for posts"}>
          Posts
        </PageHeader>
        <div className="posts-container">
          <ul className="categories">
            {this.renderCategories(this.props.categories, "/")}
          </ul>
          <div className="posts">{this.renderPosts()}</div>
        </div>
        {/* <Container>
          <div
            style={{
              display: "flex"
            }}
          >
            <input
              type="text"
              className="Select flex-5 search-input"
              placeholder="Search..."
              onChange={this.handleSearchChange.bind(this)}
            />
            <div className="spacer" />
            <Select
              closeOnSelect
              multi
              onChange={this.handleSelectChange.bind(this)}
              options={this.props.tags}
              placeholder="Tags"
              removeSelected={true}
              rtl={false}
              simpleValue
              value={this.props.selectedTags}
              className="flex-5"
            />
          </div>
          <br /> {this.renderCategories()}
          <br />
        </Container> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.PostsPublic
  };
}
const PostsNew = connect(mapStateToProps, {
  get: PostsPublicActions.get,
  filter: PostsPublicActions.filter,
  filterByTags: PostsPublicActions.filterByTags,
  getTags: PostsPublicActions.getTags,
  getCategories: PostsPublicActions.getCategories,
  selectCategory: PostsPublicActions.selectCategory,
  unSelectCategory: PostsPublicActions.unSelectCategory
})(PostsClass);

export { PostsNew };
