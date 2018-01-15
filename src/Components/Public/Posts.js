import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import _ from "lodash";
import { Container, Button } from "../Common";
import { PostPreviewService, CategoriesService } from "../../Services";
import { PostsPreviewItem } from "./PostsPreviewItem";
import { Category } from "./Category";
import { Title } from "./PostTitle";
import "./PostsPreview.css";

class Posts extends Component {
  state = {
    posts: [],
    tags: [],
    selectValue: [],
    filteredPosts: [],
    categories: [],
    mapCategories: {}
  };

  mapCategory(value, id, previews, categories) {
    if (value !== true) {
      _.forEach(value, (val, key) => {
        this.mapCategory(val, key, previews, value);
      });
    } else if (value === true) {
      if (!previews[id]) {
        delete categories[id];
        return;
      }
      categories[id] = previews[id];
    }
  }

  componentWillMount() {
    Promise.all([
      PostPreviewService.getPreviews(),
      CategoriesService.get(),
      PostPreviewService.getTags()
    ])
      .then(values => {
        let tags = _.map(values[2], (val, id) => {
          return { label: id, value: id };
        });
        let categories = values[1];
        let mapCategories = JSON.parse(JSON.stringify(categories));
        _.forEach(mapCategories, (val, id) => {
          this.mapCategory(val, id, values[0], mapCategories);
        });
        let posts = _.map(values[0], val => {
          return val;
        });
        this.setState({
          posts,
          categories,
          tags,
          mapCategories
        });
      })
      .catch(console.log);
  }

  handleSelectChange(value) {
    let filteredPosts =
      value === ""
        ? this.state.posts.slice()
        : PostPreviewService.filterByTags(this.state.posts, value.split(","));
    filteredPosts = _.keyBy(filteredPosts, "id");
    let mapCategories = JSON.parse(JSON.stringify(this.state.categories));
    _.forEach(mapCategories, (val, id) => {
      this.mapCategory(val, id, filteredPosts, mapCategories);
    });
    this.setState({
      selectValue: value,
      mapCategories
    });
  }

  handleSearchChange(e) {
    const filter = e.target.value;
    let filteredPosts =
      filter === ""
        ? this.state.posts.slice()
        : PostPreviewService.filterByText(this.state.posts, filter);
    filteredPosts = _.keyBy(filteredPosts, "id");
    let mapCategories = JSON.parse(JSON.stringify(this.state.categories));
    _.forEach(mapCategories, (val, id) => {
      this.mapCategory(val, id, filteredPosts, mapCategories);
    });
    this.setState({
      mapCategories
    });
  }

  renderSubCategory(subCategory) {
    if (subCategory.title) {
      return <Title key={subCategory.title} {...subCategory} />;
    }
    const items = _.map(subCategory, (val, id) => {
      if (!val || _.isEmpty(val)) {
        return "";
      }
      if (val.title) {
        return this.renderSubCategory(val);
      } else {
        return (
          <Category key={id} name={id}>
            {this.renderSubCategory(val)}
          </Category>
        );
      }
    });
    return items;
  }
  renderCategories() {
    const items = _.map(this.state.mapCategories, (val, id) => {
      if (!val || _.isEmpty(val)) {
        return <div key={id} />;
      } else {
        const children = this.renderSubCategory(val);
        if (
          children == "" ||
          _.every(children, val => {
            return val == "";
          })
        ) {
          return <div key={id} />;
        }
        return (
          <Category key={id} name={id} isFirst>
            {children}
          </Category>
        );
      }
    });
    return items;
  }

  render() {
    const { tags, selectValue } = this.state;
    return (
      <Container>
        <div style={{ display: "flex" }}>
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
            options={tags}
            placeholder="Tags"
            removeSelected={true}
            rtl={false}
            simpleValue
            value={selectValue}
            className="flex-5"
          />
        </div>
        <br />
        {this.renderCategories()}
        <br />
      </Container>
    );
  }
}

export { Posts };
