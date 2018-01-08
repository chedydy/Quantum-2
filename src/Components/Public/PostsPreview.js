import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import _ from "lodash";
import { Container, Button } from "../Common";
import { PostPreviewService, CategoriesService } from "../../Services";
import { PostsPreviewItem } from "./PostsPreviewItem";
import "./PostsPreview.css";

class PostsPreview extends Component {
  state = {
    posts: [],
    tags: [],
    selectValue: [],
    filteredPosts: [],
    categories: []
  };
  setPreviewsState(posts) {
    this.setState({ posts, filteredPosts: posts });
  }
  setCategoriesState(categories) {
    this.setState({ categories });
  }
  mapCategory(value, id, previews,categories) {
    if (value !== true) {
      _.forEach(value, (val, key) => {
        this.mapCategory(val, key, previews,value);
      });
    }
    else if(value===true){
      categories[id]=previews[id];
    }
  }
  componentWillMount() {
    PostPreviewService.subscribePreviews(this.setPreviewsState.bind(this));
    CategoriesService.subscribe(this.setCategoriesState.bind(this));
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
      .then((values)=>{
        const previews=values[0];
        const categories=values[1];
        _.forEach(categories, (val, id) => {
          this.mapCategory(val,id,previews,categories);
        });
        console.log(categories);
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

  renderPostsPreview() {
    const items = this.state.filteredPosts.slice().map((val, index) => {
      return <PostsPreviewItem postPreview={val} key={val.id} />;
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
          {this.renderPostsPreview()}
          <Button style={{ color: "white" }}>Older Posts &rarr;</Button>
          <br />
        </div>
      </Container>
    );
  }
}

export { PostsPreview };
