import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import _ from "lodash";
import { Container, Button } from "../Common";
import { PostPreviewService } from "../../Services";
import { PostsPreviewItem } from "./PostsPreviewItem";
import "./PostsPreview.css";

class PostsPreview extends Component {
  state = {
    posts: [],
    tags: [],
    selectValue: [],
    filteredPosts: []
  };
  setPreviesState(posts) {
    this.setState({ posts, filteredPosts: posts });
  }
  componentWillMount() {
    PostPreviewService.subscribePreviews(this.setPreviesState.bind(this));
    PostPreviewService.getTags().then(tags => {
      tags = _.map(tags, (val, id) => {
        return { label: id, value: id };
      });
      this.setState({
        ...this.state,
        tags
      });
    });
  }
  handleSelectChange(value) {
    this.setState({
      selectValue: value,
      filteredPosts:
        value === ""
          ? this.state.posts
          : PostPreviewService.filterByTags(this.state.posts, value.split(","))
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
          <Select
            closeOnSelect
            multi
            onChange={this.handleSelectChange.bind(this)}
            options={tags}
            placeholder="Search..."
            removeSelected={true}
            rtl={false}
            simpleValue
            value={selectValue}
          />
          {this.renderPostsPreview()}
          <Button style={{ color: "white" }}>Older Posts &rarr;</Button>
        </div>
      </Container>
    );
  }
}

export { PostsPreview };
