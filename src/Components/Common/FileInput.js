import React from "react";

const FileInput = props => {
  return (
    <div className="control-group">
      <div className="form-group floating-label-form-group controls">
        <label>{props.label}</label>
        <input
          type="file"
          className="form-control"
          placeholder={props.placeholder}
          id={props.id}
          required={props.required}
          onChange={props.onChange}
          accept={props.fileTypes}
        />
      </div>
    </div>
  );
};

export { FileInput };
