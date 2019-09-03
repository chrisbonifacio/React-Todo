import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo">
        <li>{this.props.todo}</li>
      </div>
    );
  }
}

export default Todo;
