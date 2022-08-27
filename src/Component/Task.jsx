import InternoTask from "../assets/InternoTask";
import { useContext } from "react";
import { TaskContext } from "../context/Context";

function Task() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl text-center font-bold">No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => {
        return <InternoTask key={task.id} task={task} />;
      })}
    </div>
  );
}
export default Task;
