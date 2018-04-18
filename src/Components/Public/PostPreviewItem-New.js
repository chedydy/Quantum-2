import React from "react";
import "./PostPreviewItem-New.css";
const PostPreviewItem = props => {
  return (
    <div className="post_box col-xs-6 col-md-4">
      <div className="post_inner">
        <h2 className="post_title">Post Title</h2>
        <div className="post_excerpt">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            accumsan nec est vitae congue. Aenean in eros urna. Cras at lacus
            sed leo tempor laoreet ut vitae dolor. Etiam id enim lobortis,
            egestas lectus nec, bibendum erat. Praesent ut ligula vel sem cursus
            egestas et ut felis. Nulla justo ante, egestas sed laoreet eu,
            iaculis vel lorem. Aliquam in velit at lectus vestibulum elementum.
            Curabitur sit amet magna elit.
          </p>
        </div>
        <div className="post_more">
          <a href="#">
            <h4>Read More...</h4>
          </a>
        </div>
      </div>
    </div>
  );
};
export { PostPreviewItem };
