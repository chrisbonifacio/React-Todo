import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div className="todo-form">
        <form onSubmit={this.props.submitHandler}>
          <label htmlFor="task">
            <input
              type="text"
              name="todo"
              placeholder="...todo"
              value={this.props.todo}
              onChange={this.props.changeHandler}
            ></input>
          </label>
          <button type="submit">Add Todo</button>
        </form>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default TodoForm;
