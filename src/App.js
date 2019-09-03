import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: {
        task: "",
        id: Date.now(),
        completed: false
      }
    };
  }

  addTodoHandler = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  clearCompletedHandler = () => {
    this.setState(prevState => {
      const todos = prevState.todos.filter(todo => {
        return todo.completed !== true;
      });

      return { todos };
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          todos={this.state.todos}
          addTodoHandler={this.addTodoHandler}
          clearCompletedHandler={this.clearCompletedHandler}
        />
        <TodoList todos={this.state.todos} todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
