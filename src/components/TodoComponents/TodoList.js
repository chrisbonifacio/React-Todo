// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <ul>
          {this.props.todos.map(todo => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                task={todo.task}
                completeTask={this.props.completeTask}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
