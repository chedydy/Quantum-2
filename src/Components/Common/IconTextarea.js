import React from "react";
import "./IconInput.css";

const IconTextarea = props => {
  return (
    <div className="iconInput">
      <i className={`fas ${props.faIcon} fa-2x iconInput-icon`} />
      <textarea
        readOnly={props.readOnly}
        rows={props.rows || "5"}
        style={{ zIndex: "unset" }}
        className="textarea-input iconInput-input"
        placeholder={props.placeholder}
        id={props.id}
        required={props.required}
        value={props.value || ""}
        onChange={e => props.onChange(e.target.value)}
        onSelect={e => {
          if (props.onSelect)
            props.onSelect(e.target.selectionStart, e.target.selectionEnd);
        }}
      />
    </div>
  );
};

export { IconTextarea };
