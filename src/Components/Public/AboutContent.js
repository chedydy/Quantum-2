import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { connect } from "react-redux";
import _ from "lodash";
import { PageHeader } from "./PageHeader";
import { Container } from "../Common";
import { AuthorModal } from "./AuthorModal";
import { AuthorItem } from "./AuthorItem";
import { AuthorsActions, AboutActions } from "../../Actions";
import "./AboutContent.css";
import "./AboutReadmore.css";

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
    _.forEach(this.props.authors, (author, id) => {
      authors.push(<AuthorItem author={author} key={id} />);
      authors.push(<br key={`id${id}`} />);
    });
    return authors;
  }
  render() {
    return (
      <div className="myheader">
        <PageHeader
          image={this.props.imageUrl}
          title={"About Quantum Civilisation"}
        >
          {this.props.title}
        </PageHeader>

        <Container>
          <AuthorModal title="About Me" appElement="#root" />
          <div className="panel-wrapper">
            <div
              className="panel"
              style={{ maxHeight: this.state.showMore ? "unset" : "60vh" }}
            >
              <ReactMarkdown source={this.props.content} />
            </div>
            <div className="fade" />
            <a
              href="#show"
              className="show btnbtn"
              id="show"
              onClick={() => this.setState({ showMore: true })}
            >
              Show Full Description
            </a>
            <a
              href="#hide"
              className="hide btnbtn"
              id="hide"
              onClick={() => this.setState({ showMore: false })}
            >
              Hide Full Description
            </a>
          </div>
          <div className="wrap-contacts">{this.renderAuthors()}</div>
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
