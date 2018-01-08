import React from "react";
import './FileInput.css';

const FileInput = props => {
  return (
    <div className="control-group">
<<<<<<< Updated upstream
      <input
        name={props.id}
        type="file"
        className="form-control inputfile"
        placeholder={props.placeholder}
        id={props.id}
        required={props.required}
        onChange={props.onChange}
        accept={props.fileTypes}/>
      <label htmlFor={props.id}>{props.label}</label>
=======
        <input
          name={props.id}
          type="file"
          className="form-control inputfile"
          placeholder={props.placeholder}
          id={props.id}
          required={props.required}
          onChange={e => {
            props.onChange;
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
>>>>>>> Stashed changes
    </div>
  );
};

export {FileInput};
