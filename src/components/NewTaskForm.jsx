import styles from "./NewTaskForm.module.css";
import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";

export function NewTaskForm({ handleAddTask }) {
  function onSubmit(event) {
    event.preventDefault();
    var newTask = {
      id: uuidv4(),
      description: event.target.item.value,
      isCompleted: false,
    };

    handleAddTask(newTask);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.contentTaskForm}>
        <input
          name="item"
          className={styles.input}
          type="text"
          placeholder="Adicionar uma nova tarefa"
          required
        />
        <button type="submit">
          Criar <PlusCircle size={15} />
        </button>
      </div>
    </form>
  );
}
