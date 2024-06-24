import React from 'react'
import { Link } from 'react-router-dom'
export default function Header(props) {
  return (
    <div>
      {/* <div>hello {props.title} Your surname is {props.surname}</div> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">ToDo App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">AddToDo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/view">ViewTodo</Link>
        </li>
        
      
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
Header.defaultProps={
  title:"Enter Your Name"
}
