import { TaskHeader } from "./TaskHeader";
import { TaskList } from "./TaskList";

export function Tasks({ tasks, onCheckTask, onDeleteTask }) {
  return (
    <>
      <TaskHeader tasks={tasks} />
      <TaskList
        tasks={tasks}
        onCheckTask={onCheckTask}
        onDeleteTask={onDeleteTask}
      />
    </>
  );
}
