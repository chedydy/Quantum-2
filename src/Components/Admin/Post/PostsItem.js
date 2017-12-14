import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Button, Modal } from "../../Common";

// const PostsItem = ({ postPreview }) => {
//   return (
//     <div className="row justify-content-center">
//       <div className="col-6 text-left align-self-center">{postPreview.title}</div>
//       <div className="col-2 text-left align-self-center">{postPreview.author}</div>
//       <div className="col-2 text-left align-self-center">{postPreview.publishDate}</div>
//       <div className="col-1 align-self-center">
//         <Button onClick={this.show.bind(this)}>Preview</Button>
//       </div>
//     </div>
//   );
// };

class PostsItem extends Component {
  show() {
    const domNode=ReactDOM.findDOMNode(this.modal);
    domNode.modal();
  }
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-6 text-left align-self-center">
          {this.props.postPreview.title}
        </div>
        <div className="col-2 text-left align-self-center">
          {this.props.postPreview.author}
        </div>
        <div className="col-2 text-left align-self-center">
          {this.props.postPreview.publishDate}
        </div>
        <div className="col-1 align-self-center">
          <Button onClick={this.show.bind(this)}>Preview</Button>
        </div>
        <Modal ref={(modal) => { this.modal = modal; }}/>
      </div>
    );
  }
}

export { PostsItem };
