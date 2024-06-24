
// import React from "react";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// export const Todo = ({ todo, onDelete ,notify}) => {
//   return (
//     <div className="col-md-4 mb-3">
//       <div className="card h-100 border border-primary-subtle">
//         <div className="card-body border ">
//           <h4 className="card-header bg-info ">{todo.title}</h4>
//           <p className="card-text">{todo.desc}</p>
//           <button
//             className="btn btn-outline-danger fa-solid fa-delete-left "
//             onClick={() => {
//               onDelete(todo);
//               // notify();
//             }}
//           >
//             <FontAwesomeIcon icon="fa-solid fa-delete-left" />
//             {/* <i class="fa-solid fa-delete-left"></i> */}
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// Todo.defaultProps = {
//   todo: { title: "Default Title", desc: "Default Description" },
// };
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ todo, onDelete, notify }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100 border border-primary-subtle">
        <div className="card-body border">
          <h4 className="card-header bg-info">{todo.title}</h4>
          <p className="card-text">{todo.desc}</p>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              onDelete(todo);
              // notify();
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt} /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

Todo.defaultProps = {
  todo: { title: "Default Title", desc: "Default Description" },
};
