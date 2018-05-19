import React, { Component } from "react";
import _ from "lodash";
import { IconInput, IconTextarea, ActionFileInput } from "../../Common";
import { connect } from "react-redux";
import { AuthorsActions } from "../../../Actions";

class AuthorFormClass extends Component {
  render() {
    return (
      <div className="aboutForm color-p">
        <IconInput
          placeholder="Name"
          label="Name"
          type="text"
          value={this.props.name}
          onChange={value => this.props.update("name", value)}
          faIcon="fa-user"
        />
        <IconTextarea
          placeholder="About"
          label="About"
          rows="10"
          value={this.props.about}
          onChange={value => this.props.update("about", value)}
          faIcon="fa-info"
        />
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
          action={e => {
            e.value = null;
            this.props.clearPhoto();
          }}
        />
        {this.props.imageUrl === "" ? (
          <div />
        ) : (
          <img
            src={this.props.imageUrl}
            alt="author"
            style={{ maxWidth: "100%" }}
          />
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { ...state.Authors.selected, image: state.Authors.image };
}
const AuthorForm = connect(mapStateToProps, {
  update: AuthorsActions.update,
  clearPhoto: AuthorsActions.clearPhoto
})(AuthorFormClass);

export { AuthorForm };
