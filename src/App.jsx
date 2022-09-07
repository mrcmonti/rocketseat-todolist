import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";
import { Tasks } from "./components/Tasks/Tasks";

import styles from "./App.module.css";

import "./global.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    setTasks((state) => {
      return [...state, task];
    });
  }

  function onCheckTask(task) {
    const updatedTask = tasks.find((t) => {
      return t.id === task.id;
    });

    updatedTask.isCompleted = !updatedTask.isCompleted;

    setTasks([...tasks]);
  }

  function onDeleteTask(task) {
    const newListTask = tasks.filter((t) => {
      return t.id !== task.id;
    });

    setTasks([...newListTask]);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTaskForm handleAddTask={handleAddTask} />
        <Tasks
          tasks={tasks}
          onCheckTask={onCheckTask}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
