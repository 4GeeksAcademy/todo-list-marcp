import React, { useState } from "react";
import Todos from "./Todos";


export default function TodoContainer() {
  const [userInput, setUserInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const taskList = tasks.map((task, index) => (
    <Todos
      key={index}
      task={task}
      index={index}
      onDelete={deleteTask}
    />
  ));

  return (
    <div className="card container text-center mt-4" style={{ width: "22rem" }}>
      <ul className="list-group list-group-flush">
        <li className="mb-1 list-group-item">
          <input
            className="w-100 ps-3 border-0"
            type="text"
            placeholder="Todo"
            value={userInput}
            onKeyDown={(e) => {
              if (e.key === "Enter" && userInput.trim() !== "") {
                setTasks((prevTasks) => [...prevTasks, userInput]);
                setUserInput("");
              }
            }}
            onChange={(e) => setUserInput(e.target.value)}
            style={{ height: "50px" }}
          />
        </li>
        {taskList}
        <li className="tasksLeft list-group-item">{tasks.length} tasks left</li>
      </ul>
    </div>
  );
};