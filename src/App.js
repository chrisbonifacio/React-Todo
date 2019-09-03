import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();

    let todoShape = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };

    const newTodos = [...this.state.todos, todoShape];

    this.setState({ todos: newTodos });
    console.log(this.state.todos);
  };

  completeTask = (e, id) => {
    // map over the todos array and return
    const todoById = this.state.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });

    this.setState({
      todos: todoById
    });
  };

  clearCompleted = () => {
    const completed = this.state.todos.filter(item => {
      return item.completed === true;
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
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
          clearCompleted={this.clearCompleted}
        />
        <TodoList todos={this.state.todos} completeTask={this.completeTask} />
      </div>
    );
  }
}

export default App;
