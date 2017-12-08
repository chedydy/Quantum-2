import React from "react";

const ContactInput = props => {
  <div className="control-group">
    <div className="form-group floating-label-form-group controls">
      <label>{props.label}</label>
      <input
        type="text"
        className="form-control"
        placeholder={props.placeholder}
        required
      />
      <p className="help-block text-danger" />
    </div>
  </div>;
};

export { ContactInput };
