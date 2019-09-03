import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-form">
        <form>
          <label htmlFor="task">
            <input type="text" name="task" placeholder="...todo"></input>
            <button onChange={this.props.addTodoHandler}>Add Todo</button>
            <button onClick={this.props.clearCompletedHandler}>
              Clear Completed
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default TodoForm;
