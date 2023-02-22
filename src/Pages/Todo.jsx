import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../Redux/action";
import styles from "./Todo.module.css";
// console.log(styles);

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos);
  console.log("Todos: ", todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch, todos.length]);

  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        marginTop: "40px",
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
      }}
    >
      {todos.map((el) => (
        <div
          style={{ padding: "15px", margin: "10px", border: "1px solid red" }}
        >
          <h2>Title: {el.title}</h2>
          <h3>Category: {el.category}</h3>
          <h3>Date: {el.date}</h3>
          <div>
            <button className={styles.editdeletebutton}>Edit</button>
            <button className={styles.editdeletebutton}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
