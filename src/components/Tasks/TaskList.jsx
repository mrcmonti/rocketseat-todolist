import styles from "./TaskList.module.css";
import ImgClipboard from "../../assets/clipboard.png";
import { TaskItem } from "./TaskItem";

export function TaskList({ tasks, onCheckTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className={styles.noItem}>
        <img src={ImgClipboard} alt="clipboard" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            onCheckTask={onCheckTask}
            onDeleteTask={onDeleteTask}
          />
        );
      })}
    </div>
  );
}
