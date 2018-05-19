import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { LinkButton } from "../../Common";
import { AuthorItem } from "./AuthorItem";
import { AuthorsActions } from "../../../Actions";
import "./Authors.css";
class AuthorsClass extends Component {
  componentWillMount() {
    this.props.get();
  }
  renderAuthors() {
    const items = _.map(this.props.authors, (author, id) => {
      return (
        <div key={id}>
          <AuthorItem author={author} />
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
            <div className="col-4 text-left align-self-center header">Name</div>
            <div className="col-3 text-left align-self-center search-header">
              Actions
            </div>
          </div>
          {this.renderAuthors()}
          <div className="row justify-content-center">
            <div className="col-3 offset-8 align-self-center">
              <div className="row">
                <LinkButton link={`/admin/authors/new`}>New Author</LinkButton>
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
    authors: state.Authors.authors
  };
}
const Authors = connect(mapStateToProps, {
  get: AuthorsActions.get
})(AuthorsClass);

export { Authors };
