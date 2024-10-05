import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handleCheckAll = (event) => {
    return this.props.checkAllTodo(event.target.checked);
  };

  handleClearAllDone = () => {
    return this.props.clearAllDone();
  };

  render() {
    const todos = this.props.todos;
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    const total = todos.length;

    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={true ? doneCount === total && total !== 0 : false}
          />
        </label>
        <span>
          <span>Finished {doneCount}</span> / Total {total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone}>
          Remove finished tasks
        </button>
      </div>
    );
  }
}
