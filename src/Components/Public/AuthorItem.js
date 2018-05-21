import React from "react";
import { connect } from "react-redux";
import { AuthorsActions } from "../../Actions";
import "./AuthorItem.css";
let AuthorItem = ({ author, show, isReverse }) => {
  return (
    <div className="container-avatar">
      <img src={author.imageUrl} alt="Avatar" className="container-avatar-image" />
      <div className={`container-avatar-overlay${isReverse ? "-reverse" : ""}`}>
        <div className="container-avatar-text">{author.name}</div>
        <a onClick={() => show(author)} className="container-avatar-show-more">
          Show More
        </a>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    ...state.About,
    selectedAuthor: state.Authors.selected,
    authors: state.Authors.authors,
    show: state.Authors.show
  };
}
AuthorItem = connect(mapStateToProps, {
  show: AuthorsActions.show
})(AuthorItem);

export { AuthorItem };
