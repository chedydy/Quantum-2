import React from "react";
import "./Button.css";

const Input = props => {
  return (
    <div className="control-group">
      <div className="form-group floating-label-form-group controls ">
        <input
          type={props.type}
          className="form-control new-input"
          placeholder={props.placeholder}
          id={props.id}
          value={props.value || ""}
          onChange={(event)=>props.onChange(event.target.value)}
        />
        <p className="help-block text-danger" />
      </div>
    </div>
  );
};

export { Input };
