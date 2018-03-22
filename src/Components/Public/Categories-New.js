import React from "react";
import "./Categories-New.css";
const CategoriesNew = props => {
  return (
    <div
      className={`side-menu-list-item category-item ${
        props.showChildren ? "side-menu-list-item-active category-active" : ""
      }`}
    >
      <div className="nav-link " onClick={props.onClick}>
        <div>{props.name}</div>
      </div>
      <div hidden={!props.showChildren}>{props.children}</div>
    </div>
  );
};

export { CategoriesNew };
