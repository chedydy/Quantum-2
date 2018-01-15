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
    categories: []
  };

  mapCategory(value, id, previews, categories) {
    if (value !== true) {
      _.forEach(value, (val, key) => {
        this.mapCategory(val, key, previews, value);
      });
    } else if (value === true) {
      categories[id] = previews[id];
    }
  }

  componentWillMount() {
    PostPreviewService.getTags().then(tags => {
      tags = _.map(tags, (val, id) => {
        return { label: id, value: id };
      });
      this.setState({
        ...this.state,
        tags
      });
    });
    Promise.all([PostPreviewService.getPreviews(), CategoriesService.get()])
      .then(values => {
        const previews = values[0];
        const categories = values[1];
        _.forEach(categories, (val, id) => {
          this.mapCategory(val, id, previews, categories);
        });
        this.setState({ categories });
      })
      .catch(console.log);
  }

  handleSelectChange(value) {
    this.setState({
      selectValue: value,
      filteredPosts:
        value === ""
          ? this.state.posts.slice()
          : PostPreviewService.filterByTags(this.state.posts, value.split(","))
    });
  }

  handleSearchChange(e) {
    const filter = e.target.value;
    this.setState({
      filteredPosts:
        filter === ""
          ? this.state.posts.slice()
          : PostPreviewService.filterByText(this.state.posts, filter)
    });
  }

  renderSubCategory(subCategory, flex) {
    if (subCategory.title) {
      return <Title key={subCategory.title} {...subCategory} />;
    }
    const items = _.map(subCategory, (val, id) => {
      if (!val) {
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
    const items = _.map(this.state.categories, (val, id) => {
      if (!val) {
        return <div key={id} />;
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

  render() {
    const { tags, selectValue } = this.state;
    return (
      <Container>
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="row">
            <input
              type="text"
              className="Select col-6 search-input"
              placeholder="Search..."
              onChange={this.handleSearchChange.bind(this)}
            />
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
              className="col-6"
            />
          </div>
          {this.renderCategories()}
          <br />
        </div>
      </Container>
    );
  }
}

export { Posts };
