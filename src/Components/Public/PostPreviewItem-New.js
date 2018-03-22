import React from "react";
import "./PostPreviewItem-New.css";
const PostPreviewItem = props => {
  return (
    <div>
      <div className="box">
        <div className="position">
          <div className="header">
            <span className="title">Elements</span>
          </div>
          <button className="button" type="button">
            See more inside
          </button>
        </div>
      </div>
      <div className="box box--half">
        <div className="position">
          <div className="header">
            <span className="title">Examples</span>
          </div>
          <button className="button" type="button">
            See more inside
          </button>
        </div>
      </div>
      <div className="box box--half reverse--transition">
        <div className="position position--right">
          <div className="header">
            <span className="title">Examples</span>
          </div>
          <button className="button" type="button">
            See more inside
          </button>
        </div>
      </div>
    </div>
  );
};
export { PostPreviewItem };
