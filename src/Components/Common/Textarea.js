import React from "react";
import "./Textarea.css";

const Textarea = props => {
  return (
    <div className="textarea">
        <textarea
          rows={props.rows || "5"}
          style={{ zIndex: "unset" }}
          className="textarea-input"
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

export { Textarea };
