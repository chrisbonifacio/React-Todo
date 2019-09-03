import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <div className={this.props.todo.completed ? "completed" : null}>
        <li onDoubleClick={this.props.completeTask(this.props.todo.id)}>
          {this.props.task}
        </li>
      </div>
    );
  }
}

export default Todo;
