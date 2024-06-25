

import "./bootstrap.min.css";
import Header from "./Header";
import { Todos } from "./Todos";
import React, { useState, useEffect } from "react";
import Footer from "./footer";
// import { AddTodo } from "./AddTodo";
import { AddTodo } from "./addTodo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
    toast.error("Todo deleted successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notify = () => {
    toast("Wow so easy!");
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    toast.success("Todo added successfully!", {
      autoClose: 1000,
    });
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
 todos.length>=1 ? document.title=`Todo List(${todos.length})`: document.title=`Todo List`;
  }, [todos]);

  return (
    <>
      <Router>
        <Header />
        
        <Routes>
          <Route
            exact
            path="/"
            element={<><AddTodo addTodo={addTodo} /> <Todos todos={todos} onDelete={onDelete} notify={notify} /></>}
          />
          <Route
            exact
            path="/view"
            element={<Todos todos={todos} onDelete={onDelete} notify={notify} />}
          />
           <Route
            exact
            path="/add"
            element={<AddTodo addTodo={addTodo} />}
          />
        </Routes>
        {/* <Footer /> */}
        <ToastContainer />
        <Footer/>
      </Router>
    </>
  );
}

export default App;
