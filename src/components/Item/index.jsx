import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = { mouseEnter: false };

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouseEnter: flag });
    };
  };

  render() {
    const { name, done } = this.props;
    const { mouseEnter } = this.state;

    return (
      <li
        style={{ backgroundColor: mouseEnter ? "#ddd" : "white" }} // change bg-color onMouseEnter
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input type="checkbox" defaultChecked={done} />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouseEnter ? "block" : "none" }} // display the Delete btn onMouseEnter
        >
          Delete
        </button>
      </li>
    );
  }
}
