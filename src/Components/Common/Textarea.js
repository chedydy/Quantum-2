import React from "react";

const Textarea = props => {
  
  return (
    
    <div className="control-group">
      <div className="form-group floating-label-form-group controls">
        <label>{props.label}</label>
        <textarea
          rows={props.rows || "5"}
          style={{zIndex:'unset'}}
          className="form-control"
          placeholder={props.placeholder}
          id={props.id}
          required={props.required}
          value={props.value || ""}
          onChange={(e)=>props.onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export { Textarea };
