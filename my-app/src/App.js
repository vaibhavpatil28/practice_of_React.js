import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/welcome";
import WelcomeFunction from "./components/functionComponent";
import Comment from "./components/comment/comment";

class App extends Component {
  commentData = {
    author: {
      name: "johan",
      avatarUrl: "./assets/avatar.jpg"
    },
    commentText: "its comment",
    date: "6/9/2018"
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <Welcome name="Vaibhav" />
          <Welcome name="Vishwjeet" />
          <Welcome name="Ajinkya" />
        </div>
        <hr />
        <div>
          <WelcomeFunction name="Varun" />
          <WelcomeFunction name="Omkar" />
          <WelcomeFunction name="mubin" />
          <WelcomeFunction name="Ravi" />
        </div>
        <hr />
        <div className="container">
          <h1 className="text-center" >Comments</h1>
          <div className="row">
            <div className="col-4">
              <Comment
                author={this.commentData.author}
                commentText={this.commentData.commentText}
                date={this.commentData.date}
              />
            </div>
            <div className="col-4">
              <Comment
                author={this.commentData.author}
                commentText={this.commentData.commentText}
                date={this.commentData.date}
              />
            </div>
            <div className="col-4">
              <Comment
                author={this.commentData.author}
                commentText={this.commentData.commentText}
                date={this.commentData.date}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
