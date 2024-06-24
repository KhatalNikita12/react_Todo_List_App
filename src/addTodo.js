
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description is Null");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className='container my-3 w-50 '>
      <form onSubmit={submit} >
        <h3>Add Todos </h3>
     
        <div className="form-floating mb-3 ">
  <input type="text" className="form-control " id="floatingInput" placeholder='Enter Todo Title' value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            name='title' />
  <label htmlFor="floatingInput">Enter Todo Title</label>
</div>

<div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingInput1" placeholder='Enter Todo Description' value={desc} 
            onChange={(e) => setDesc(e.target.value)} 
            name='desc' />
  <label htmlFor="floatingInput1">Enter Todo Description</label>
</div>
        <button type="submit" className='btn btn-sm btn-success'>  <FontAwesomeIcon icon={faEdit} /> Add Todo</button>
      </form>
    </div>
  );
};
