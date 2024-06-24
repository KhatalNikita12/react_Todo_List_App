import React from 'react';

const Todo = ({ todo, onDelete }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>
          Delete
        </button>
      </div>
    </div>
  );
};

Todo.defaultProps = {
  todo: { title: 'Default Title', desc: 'Default Description' },
};

const TodoList = ({ todos, onDelete }) => {
  const rows = [];
  for (let i = 0; i < todos.length; i += 3) {
    rows.push(todos.slice(i, i + 3));
  }

  return (
    <div className="container">
      {rows.map((row, rowIndex) => (
        <div className="row mb-3" key={rowIndex}>
          {row.map((todo, colIndex) => (
            <div className="col-md-4" key={colIndex}>
              <Todo todo={todo} onDelete={onDelete} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// Example usage in a parent component
class DemoTodo extends React.Component {
  state = {
    todos: [
      { id: 1, title: 'Todo 1', desc: 'Description 1' },
      { id: 2, title: 'Todo 2', desc: 'Description 2' },
      { id: 3, title: 'Todo 3', desc: 'Description 3' },
      { id: 4, title: 'Todo 4', desc: 'Description 4' },
    ],
  };

  handleDelete = (todoToDelete) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoToDelete.id),
    }));
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default DemoTodo;
