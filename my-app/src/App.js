import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/welcome";
import WelcomeFunction from './components/functionComponent';
import Comment from './components/comment/comment';


class App extends Component {
  render() {
    return (
      <React.Fragment>

      <div>
        <Welcome name="Vaibhav" />
        <Welcome name="Vishwjeet" />
        <Welcome name="Ajinkya" />
      </div>
       <hr/>
        <div>
          <WelcomeFunction name="Varun" ></WelcomeFunction>
          <WelcomeFunction name="Omkar" ></WelcomeFunction>
          <WelcomeFunction name="mubin" ></WelcomeFunction>
          <WelcomeFunction name="Ravi" ></WelcomeFunction>
        </div>
        <hr/>
        <div>
          <Comment></Comment>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
