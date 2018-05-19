import React, { Component } from "react";
import "./IconInput.css";

class ActionFileInput extends Component {
  render() {
    const props = this.props;
    return (
      <div className="iconInput center">
        <i className={`fas ${props.faIcon} fa-2x iconInput-icon`} />
        <input
          name={props.id}
          type="file"
          className="iconInput-input"
          placeholder={props.placeholder}
          id={props.id}
          required={props.required}
          readOnly={props.readOnly}
          onChange={e => {
            e.preventDefault();
            let reader = new FileReader();
            let image = e.target.files[0];
            reader.onloadend = () => {
              props.onChange(image, reader.result);
            };
            reader.readAsDataURL(image);
          }}
          ref={ref => (this.fileInput = ref)}
          accept={props.fileTypes}
        />
        <i
          className={`fas ${
            props.faActionIcon
          } fa-2x iconInput-icon iconInput-clickable`}
          onClick={() => props.action(this.fileInput)}
        />
      </div>
    );
  }
}

export { ActionFileInput };
