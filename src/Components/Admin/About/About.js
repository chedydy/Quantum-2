import React, { Component } from "react";
import { connect } from "react-redux";
import { SubmitButton, Button } from "../../Common";
import { AboutForm } from "./AboutForm";
import { AboutActions } from "../../../Actions";
import "./EditAbout.css";

class AboutClass extends Component {
  componentWillMount() {
    return this.props.get();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.image
      ? this.props.saveWithImage(
          {
            title: this.props.title,
            content: this.props.content,
            imageUrl: this.props.imageUrl
          },
          this.props.image
        )
      : this.props.save({
          title: this.props.title,
          content: this.props.content,
          imageUrl: this.props.imageUrl
        });
  };

  render() {
    return (
      <div className="container">
        <div className="justify-content-center">
          <div className="col">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <AboutForm />
              <br />
              {this.props.edit ? (
                <div className="row justify-content-end col">
                  <SubmitButton className="fa fa-save fa-3x save-button" />
                  <Button
                    onClick={() => this.props.toggleEdit(false)}
                    className="fa fa-times fa-3x save-button"
                  />
                </div>
              ) : (
                <div className="row justify-content-end col">
                  <Button
                    onClick={() => this.props.toggleEdit(true)}
                    className="fa fa-edit fa-3x save-button"
                  />
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { ...state.About };
}
const About = connect(mapStateToProps, {
  toggleEdit: AboutActions.edit,
  save: AboutActions.save,
  saveWithImage: AboutActions.saveWithImage,
  get: AboutActions.get
})(AboutClass);

export { About, AboutClass };
