import React from "react";
import { useContext } from "react";
import { TaskContext } from "../context/Context";

function InternoTask({ task }) {
  const { eliminarTarea } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-2xl font-bold capitalize">{task.title}</h1>
      <p className="text-xs text-gray-400 uppercase">{task.descripcion}</p>
      <button
        className="bg-red-500 p-2 text-xs rounded-lg mt-2 hover:bg-red-400"
        onClick={() => {
          eliminarTarea(task.id);
        }}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default InternoTask;
