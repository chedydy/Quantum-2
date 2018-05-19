import React from "react";
import "./IconInput.css";

const IconInput = props => {
  return (
    <div className="iconInput">
      <i className={`fas ${props.faIcon} fa-2x iconInput-icon`} />
      <input
        readOnly={props.readOnly}
        type={props.type}
        className="iconInput-input"
        placeholder={props.placeholder}
        id={props.id}
        value={props.value || ""}
        onChange={event => props.onChange(event.target.value)}
      />
    </div>
  );
};

export { IconInput };
