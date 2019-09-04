import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ""
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();

    this.setState({ newTask: "" });
    this.props.submitHandler(e, this.state.newTask);
  };

  render() {
    return (
      <div className="todo-form">
        <form onSubmit={this.submitHandler}>
          <label htmlFor="task">
            <input
              type="text"
              name="newTask"
              placeholder="...todo"
              value={this.state.newTask}
              onChange={this.changeHandler}
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
