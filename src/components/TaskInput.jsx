"use client";
import { useState } from "react";

export const TaskInput = ({ addTaskFunc }) => {
  const [taskInput, setTaskInput] = useState("");

  const addTaskBtnOnClick = () => {
    addTaskFunc(taskInput);
    setTaskInput("");
  };

  const taskInputOnChange = (event) => {
    setTaskInput(event.target.value);
  };

  const taskInputOnKeyUp = (event) => {
    if (event.key === "Enter" && taskInput !== "") addTaskBtnOnClick();
  };
  const Btnclass =
    taskInput === "" ? "btn btn-primary disabled" : "btn btn-primary";
  return (
    <div className="d-flex gap-1">
      <input
        className="form-control"
        placeholder="Insert a task here.."
        onChange={taskInputOnChange}
        onKeyUp={taskInputOnKeyUp}
        value={taskInput}
      />
      <button className={Btnclass} onClick={addTaskBtnOnClick}>
        Add
      </button>
    </div>
  );
};
