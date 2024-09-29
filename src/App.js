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

  // update a todo Object
  updateTodo = (id, isDone) => {
    // get old todos
    const { todos } = this.state;
    // create new todos with the updated todo item
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, done: isDone };
      } else {
        return todoObj;
      }
    });
    // setState to the newTodos
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
