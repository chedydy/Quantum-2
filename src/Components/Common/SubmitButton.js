import React from "react";

const SubmitButton = props => {
  return (
    <div className="form-group">
      <button type="submit" className={props.className? props.className :"btn btn-primary"}>
        {props.children}    
      </button>
    </div>
  );
};

export { SubmitButton };
