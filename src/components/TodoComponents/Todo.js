import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo">
        <li onDoubleClick={this.props.markAsCompleted}>
          {this.props.todo.task}
        </li>
      </div>
    );
  }
}

export default Todo;
