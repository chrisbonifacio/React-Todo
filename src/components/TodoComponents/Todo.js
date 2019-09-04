import React from "react";
import "./Todo.css";

class Todo extends React.Component {
  render() {
    return (
      <div className={this.props.todo.completed ? "completed" : null}>
        <li onClick={this.props.completeTask}>{this.props.task}</li>
      </div>
    );
  }
}

export default Todo;
