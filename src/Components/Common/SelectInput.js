import React from "react";
import _ from "lodash";
const SelectInput = props => {
  const options = _.map(props.options, (val, index) => {
    return (
      <option key={index} value={val}>
        {index}
      </option>
    );
  });
  return (
    <div className="control-group">
      <div className="form-group floating-label-form-group controls">
        <select
          className="form-control"
          id={props.id}
          value={props.value || ""}
          onChange={event => {
            console.log(
              event.target.value,
              event.target.innerText,
              event.target.key
            );
            props.onChange(event.target.value);
          }}
        >
          <option value="" disabled defaultValue>
            {props.label}
          </option>
          {options}
        </select>
        <p className="help-block text-danger" />
      </div>
    </div>
  );
};

export { SelectInput };
