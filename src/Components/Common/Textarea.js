import React from "react";

const Textarea = props => {
  return (
    <div className="control-group">
      <div className="form-group floating-label-form-group controls">
        <label>{props.label}</label>
        <textarea
          rows={props.rows || "5"}
          className="form-control"
          placeholder={props.placeholder}
          id={props.id}
          required
          value={props.value || ""}
          onChange={props.onChange}
          readOnly={props.readOnly || false}
        />
      </div>
    </div>
  );
};

export { Textarea };