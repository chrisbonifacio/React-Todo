// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-list">
        <ul>
          {this.props.todos.map(task => {
            return <Todo key={task.id} todo={this.props.todo} />;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
