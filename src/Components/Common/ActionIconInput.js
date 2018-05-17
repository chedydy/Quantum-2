import React from "react";
import "./IconInput.css";

const ActionIconInput = props => {
  return (
    <div className="iconInput">
      <i className={`fas ${props.faIcon} fa-2x iconInput-icon`} />
      <input
        type={props.type}
        className="iconInput-input"
        placeholder={props.placeholder}
        id={props.id}
        value={props.value || ""}
        onChange={event => props.onChange(event.target.value)}
      />
      <i
        className={`fas ${
          props.faActionIcon
        } fa-2x iconInput-icon iconInput-clickable`}
        onClick={props.action}
      />
    </div>
  );
};

export { ActionIconInput };
