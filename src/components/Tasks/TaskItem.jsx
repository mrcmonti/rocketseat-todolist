import { Check, Circle, Trash } from "phosphor-react";
import styles from "./TaskItem.module.css";

export function TaskItem({ task, onCheckTask, onDeleteTask }) {
  function handleCheckTask() {
    onCheckTask(task);
  }

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  return (
    <div className={styles.task}>
      <div className={styles.content}>
        {task.isCompleted ? (
          <button onClick={handleCheckTask} className={styles.btnChecked}>
            <Check color="white" size={20} />
          </button>
        ) : (
          <button onClick={handleCheckTask} className={styles.btnUnchecked}>
            <Circle color="var(--blue)" size={24} />
          </button>
        )}
        <p>{task.description}</p>
        <button className={styles.btnTrash} onClick={handleDeleteTask}>
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
}
