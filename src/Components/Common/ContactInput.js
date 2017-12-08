import React from "react";

const ContactInput = props => {
  return (
    <div className="control-group">
      <div className="form-group floating-label-form-group controls">
        <label>{props.label}</label>
        <input
          type={props.type}
          className="form-control"
          placeholder={props.placeholder}
          id={props.id}
          required
        />
        <p className="help-block text-danger" />
      </div>
    </div>
  );
};

export { ContactInput };
