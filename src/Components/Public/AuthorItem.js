import React from "react";
import { connect } from "react-redux";
import { AuthorsActions } from "../../Actions";
import "./AboutContent.css";
let AuthorItem = ({ author, show }) => {
  return (
    <div className="container-avatar">
      <img src={author.imageUrl} alt="Avatar" className="image" />
      <div className="overlay-reverse">
        <div className="text">{author.name}</div>
        <a onClick={() => show(author)} className="modal-design">
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
