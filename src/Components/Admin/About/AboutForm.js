import React, { Component } from "react";
import { IconInput, IconTextarea, ActionFileInput } from "../../Common";
import { connect } from "react-redux";
import { AboutActions } from "../../../Actions";

class AboutFormClass extends Component {
  render() {
    return (
      <div className="aboutForm color-p">
        <IconInput
          placeholder="Title"
          label="Title"
          type="text"
          value={this.props.title}
          onChange={value => this.props.update("title", value)}
          faIcon="fa-angle-double-down"
          readOnly={!this.props.edit}
        />
        <IconTextarea
          placeholder="Content"
          label="Content"
          rows="10"
          value={this.props.content}
          onChange={value => this.props.update("content", value)}
          faIcon="fa-info"
          readOnly={!this.props.edit}
        />
        {this.props.edit ? (
          <ActionFileInput
            placeholder="Select image"
            label="Image"
            type="file"
            fileTypes="image/*"
            onChange={(image, imageUrl) => {
              this.props.update("image", image);
              this.props.update("imageUrl", imageUrl);
            }}
            faIcon="fa-file-image"
            faActionIcon="fa-times"
            readOnly={!this.props.edit}
            action={() => this.props.clearPhoto()}
          />
        ) : (
          <div />
        )}
        <img
          src={this.props.imageUrl}
          alt="about"
          style={{ maxWidth: "100%" }}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { ...state.About };
}
const AboutForm = connect(mapStateToProps, {
  update: AboutActions.update,
  clearPhoto: AboutActions.clearPhoto
})(AboutFormClass);

export { AboutForm };
