import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { connect } from "react-redux";
import _ from "lodash";
import { PageHeader } from "../PageHeader";
import { Container } from "../../Common";
import { AuthorModal } from "./AuthorModal";
import { AuthorItem } from "./AuthorItem";
import { AuthorsActions, AboutActions } from "../../../Actions";
import "./AboutContent.css";

class AboutContentClass extends Component {
  state = {
    showMore: false
  };
  componentWillMount() {
    this.props.getAbout();
    this.props.getAuthors();
  }
  renderAuthors() {
    const authors = [];
    let index = 0;
    _.forEach(this.props.authors, (author, id) => {
      authors.push(
        <AuthorItem author={author} key={id} isReverse={index % 2 === 0} />
      );
      authors.push(<br key={`id${id}`} />);
      index++;
    });
    return authors;
  }
  render() {
    return (
      <div className="aboutContent">
        <PageHeader
          image={this.props.imageUrl}
          title={"About Quantum Civilization"}
        >
          {this.props.title}
        </PageHeader>

        <Container>
          <AuthorModal title="About Me" appElement="#root" />
          <div className="aboutContent-about-container">
            <div
              className="aboutContent-about"
              id={this.state.showMore ? "hide" : "show"}
            >
              <ReactMarkdown
                source={
                  this.state.showMore ? this.props.content : this.props.preview
                }
              />
            </div>
            {this.state.showMore ? (
              <a
                href="#show"
                className="aboutContent-hide"
                onClick={() => this.setState({ showMore: false })}
              >
                Hide Full Description
              </a>
            ) : (
              <a
                href="#show"
                className="aboutContent-show"
                onClick={() => this.setState({ showMore: true })}
              >
                Show Full Description
              </a>
            )}
          </div>
          <div className="aboutContent-authors">{this.renderAuthors()}</div>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.About,
    authors: state.Authors.authors
  };
}
const AboutContent = connect(mapStateToProps, {
  getAuthors: AuthorsActions.get,
  getAbout: AboutActions.get
})(AboutContentClass);

export { AboutContent };
