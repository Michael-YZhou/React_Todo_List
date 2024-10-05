import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  // track mouse enter/exit an todo item
  state = { mouseEnter: false };

  // callback func for mouse enter/exit an item
  handleMouseEnter = (flag) => {
    return () => {
      this.setState({ mouseEnter: flag });
    };
  };

  // callback func for check/uncheck a todo item
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };

  // callback function for delete a todo item
  handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item ?")) {
      this.props.deleteTodo(id);
    }
  };

  render() {
    const { id, name, done } = this.props;
    const { mouseEnter } = this.state;

    return (
      <li
        style={{ backgroundColor: mouseEnter ? "#ddd" : "white" }} // change bg-color onMouseEnter
        onMouseEnter={this.handleMouseEnter(true)}
        onMouseLeave={this.handleMouseEnter(false)}
      >
        <label>
          <input
            type="checkbox"
            defaultChecked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          onClick={() => this.handleDelete(id)}
          style={{ display: mouseEnter ? "block" : "none" }} // display the Delete btn onMouseEnter
        >
          Delete
        </button>
      </li>
    );
  }
}
