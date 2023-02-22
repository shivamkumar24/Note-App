import React from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../Redux/action";

const AddTodo = () => {
  return (
    <div
      style={{
        width: "30%",
        margin: "auto",
        padding: "20px",
        marginTop: "20px",
        border: "1px solid black",
        borderRadius: "15px",
        backgroundColor: "yellow",
      }}
    >
      {/* Input Todo */}
      <div>
        <label style={{ fontSize: "15px", fontWeight: "bold", padding: "5px" }}>
          Description:
        </label>
        <input
          type="text"
          name="todo"
          placeholder="What do you need to do ...?"
          style={{ padding: "2px 5px" }}
        />
      </div>

      {/* Select Categories */}
      <div
        style={{
          margin: "8px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          {/* categories */}
          <label style={{ fontWeight: "bold", marginRight: "5px" }}>
            Categories:
          </label>
          <select>
            <option>Urgent</option>
            <option>Important</option>
          </select>
        </div>
        <div>
          {/* Date */}
          <label style={{ fontWeight: "bold", marginRight: "5px" }}>
            Date:
          </label>
          <input type="date" name="date" placeholder="dd-mm-yyyy" />
        </div>
      </div>

      {/* Button */}
      <button
        style={{
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          backgroundColor: "whitesmoke",
          fontWeight: "bold",
          padding: "4px 8px",
          borderRadius: "12px",
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTodo;
