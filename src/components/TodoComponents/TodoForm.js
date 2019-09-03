import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="task">
            <input type="text" name="task" placeholder="...todo"></input>
            <button onClick={addTodo}>Add Todo</button>
            <button
              onClick={() => {
                this.setState({});
              }}
            >
              Clear Completed
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default TodoForm;
