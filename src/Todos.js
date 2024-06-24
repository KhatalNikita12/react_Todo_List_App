// import React from "react";
// import { Todo } from "./Todo";
// import DemoTodo from "./demotodo";
// import Header from "./Header";
// export const Todos = (props) => {
//   let mystyle={
//     minHeight:'70vh'
//   }
//   return (
//     <div className="container my-3" style={mystyle}>
//       {/* <Todo/> */}
//       <h3 className="text-center bg-info py-3">Todos List</h3>
//       {
//       props.todos.length===0 ? " there is No todos to display ":
//       props.todos.map((todo) => {
//         return (<>
//         <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
//         {/* <DemoTodo todo={todo} key={todo.sno} onDelete={props.onDelete} /> */}
//         </>
//         )
//       })
      
//       }
//     </div>
//   );
// };
import React from "react";
import { Todo } from "./Todo";

export const Todos = (props) => {
  const mystyle = {
    minHeight: '70vh',
  };

  const chunkArray = (array, chunkSize) => {
    const results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  };

  const todoChunks = chunkArray(props.todos, 3);

  return (
    <div className="container my-3" style={mystyle}>
      <h3 className="text-center bg-info py-3">Todos List</h3>
      {props.todos.length === 0 ? (
        <h2 className="text-center my-3">There are no todos to display</h2>
        
      ) : (
        todoChunks.map((chunk, chunkIndex) => (
          <div className="row" key={chunkIndex}>
            {chunk.map((todo) => (
              <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
            ))}
          </div>
        ))
      )}
    </div>
  );
};
