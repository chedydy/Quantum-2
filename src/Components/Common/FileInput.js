import React from "react";
import './FileInput.css';

const FileInput = props => {
  return (
    <div className="control-group">
        <input
          name={props.id}
          type="file"
          className="form-control"
          placeholder={props.placeholder}
          id={props.id}
          required={props.required}
          readOnly={props.readOnly}
          onChange={e => {
            // props.onChange;
            e.preventDefault();
            let reader = new FileReader();
            let image = e.target.files[0];
            reader.onloadend = () => {
              props.onChange(image, reader.result);
            };
            reader.readAsDataURL(image);
          }}
          accept={props.fileTypes}
        />
        <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export {FileInput};
