import React from "react";

const DeleteButton = props => {
  return (
    <div className="form-group">
      <button className={props.className? props.className :"btn btn-primary"}>
        {props.children}    
      </button>
    </div>
  );
};

export { DeleteButton };
