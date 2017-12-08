import React from "react";

const ContactTextarea = props => {
  return (
    <div className="control-group">
      <div className="form-group floating-label-form-group controls">
        <label>{props.label}</label>
        <textarea
          rows="5"
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

export { ContactTextarea };
