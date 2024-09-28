import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  // initial state
  state = {
    todos: [
      { id: "001", name: "Eat", done: true },
      { id: "002", name: "Sleep", done: true },
      { id: "003", name: "Code", done: false },
    ],
  };

  // add a todo Obj to the todo list in the state of the App component
  addTodo = (todoObj) => {
    // retrive original todo list
    const provTodos = this.state.todos;
    // add the new todoObj to the state
    this.setState({ todos: [todoObj, ...provTodos] });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
