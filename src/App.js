import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    todos: []
  };

  submitHandler = (e, newTask) => {
    e.preventDefault();

    let todoShape = {
      task: newTask,
      id: Date.now(),
      completed: false
    };

    const newTodos = [...this.state.todos, todoShape];

    this.setState({ todos: newTodos });
  };

  completeTask = id => {
    // map over the todos array and if todo.id === id, return todo with the opposite completed value, else return todo as is
    console.log("event fired off");
    const todoById = this.state.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });

    this.setState({
      todos: todoById
    });
  };

  clearCompleted = () => {
    const completed = this.state.todos.filter(item => {
      return item.completed === false;
    });

    this.setState({
      todos: completed
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          submitHandler={this.submitHandler}
          clearCompleted={this.clearCompleted}
        />
        <TodoList todos={this.state.todos} completeTask={this.completeTask} />
      </div>
    );
  }
}

export default App;
