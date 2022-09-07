import { useEffect, useState } from "react";
import styles from "./TaskHeader.module.css";

export function TaskHeader({ tasks }) {
  const [countCompleted, setCountCompleted] = useState(0);

  useEffect(() => {
    setCountCompleted(tasks.filter((task) => task.isCompleted).length);
  }, [tasks]);

  return (
    <div className={styles.header}>
      <strong>
        Tarefas criadas<span>{tasks.length}</span>
      </strong>
      <strong>
        Concluidas<span>{countCompleted}</span>
      </strong>
    </div>
  );
}
