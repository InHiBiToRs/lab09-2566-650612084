"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Task } from "@/components/Task";
import { TaskInput } from "@/components/TaskInput";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function Home() {
  //tasks = array of {id: string, title: string, completed: boolean}
  const [tasks, setTasks] = useState([]);
  const [allcount, setallCount] = useState(0);
  const [Donecount, setDoneCount] = useState(0);

  const addTask = (newTaskTitle) => {
    setallCount(allcount + 1);
    const newTask = { id: nanoid(), title: newTaskTitle, completed: false };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const deleteTask = (taskId) => {
    const FindTask = structuredClone(tasks);
    const task = FindTask.find((x) => x.id === taskId);
    if (task.completed === true) setDoneCount(Donecount - 1);
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    setallCount(allcount - 1);
  };

  const toggleDoneTask = (taskId) => {
    //structuredClone will copy an array or an object "deeply"
    //So objects within an object will be copied too
    const newTasks = structuredClone(tasks);
    //search for a task based on condition
    const task = newTasks.find((x) => x.id === taskId);
    if (task.completed === true) {
      setDoneCount(Donecount - 1);
    } else {
      setDoneCount(Donecount + 1);
    }
    task.completed = !task.completed;
    setTasks(newTasks);
  };

  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* Task summary */}
        <p className="text-center text-secondary fst-italic">
          All ({allcount}) Done ({Donecount})
        </p>
        {/* task input */}
        <TaskInput addTaskFunc={addTask} />

        {/* tasks mapping*/}
        {tasks.map((task) => (
          <Task
            id={task.id}
            title={task.title}
            deleteTaskFunc={deleteTask}
            toggleDoneTaskFunc={toggleDoneTask}
            completed={task.completed}
            key={task.id}
          />
        ))}
      </div>

      {/* //footer section */}
      <Footer year="2023" fullName="Tanakrit Boonyoung" studentId="650612084" />
    </div>
  );
}
