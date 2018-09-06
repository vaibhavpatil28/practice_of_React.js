import React, { Component } from "react";
import UserInfo from "./userInfo";

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <UserInfo author={this.props.author} ></UserInfo>
        <div className="comment-text text-center">
            {this.props.commentText}
        </div>
        <div className="comment-date text-center">
            {this.props.date}
        </div>
      </div>
    );
  }
}

export default Comment;
