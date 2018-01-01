import React from "react";

const SelectInput = props => {
  const options = props.options.map((val, index) => {
    return (
      <option key={val} value={val}>
        {val}
      </option>
    );
  });
  return (
    <div className="control-group">
      <div className="form-group floating-label-form-group controls">
        <select
          className="form-control"
          id={props.id}
          required
          value={props.value || ""}
          onChange={props.onChange}
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
