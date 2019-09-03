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
      todos: [
        { task: "Organize Garage", id: Date.now(), completed: true },
        { task: "Bake Cookies", id: Date.now(), completed: false }
      ],
      todo: {
        task: "",
        id: Date.now(),
        completed: false
      }
    };
  }

  addTodoHandler = e => {
    e.preventDefault();
    this.setState(() => {
      return {
        todo: {
          [e.target.name]: e.target.value
        }
      };
    });
    console.log(this.state.todos);
  };

  clearCompletedHandler = () => {
    this.setState(prevState => {
      const todos = prevState.todos.filter(todo => {
        return todo.completed !== true;
      });

      return { todos };
    });
  };

  markAsCompleted = e => {
    console.log(e);
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
        <TodoList
          todos={this.state.todos}
          todo={this.state.todo}
          markAsCompleted={this.markAsCompleted}
        />
      </div>
    );
  }
}

export default App;
