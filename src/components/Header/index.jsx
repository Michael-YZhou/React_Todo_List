import React, { Component } from "react";
import "./index.css";

export default class Header extends Component {
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="Input task name, press Enter to confirm"
        ></input>
      </div>
    );
  }
}
