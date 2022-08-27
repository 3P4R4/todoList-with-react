import { FcDocument } from "react-icons/fc";
import { useState, useContext } from "react";
import { TaskContext } from "../context/Context";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { crearTarea } = useContext(TaskContext);


  const capturaDatos = (e) => {
    setTitle(e.target.value);
  };
  const enviarForm = (e) => {
    e.preventDefault();
    crearTarea({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  function capturaDescripttion(e) {
    setDescription(e.target.value);
  }
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={enviarForm} className="bg-slate-800 p-10 mb-4 rounded-md">
        <h1 className="text-2xl text-white text-center">Crea tu tarea</h1>
        <input
          placeholder="Ingresa una tarea"
          onChange={capturaDatos}
          value={title}
          autoFocus
        className="bg-gray-400 mt-4 mb-4 rounded-sm w-full p-1"/>
        <textarea
          placeholder="Agrega una descripción"
          onChange={capturaDescripttion}
          value={description}
          className="bg-gray-400 mt-4 mb-4 rounded-sm w-full p-1"/>
        <button className="bg-indigo-400 text-yellow-50 p-2 flex justify-center items-center rounded-md hover:bg-slate-600">
          <FcDocument className="mr-1"/>
          Guardar tarea
        </button>
      </form>
    </div>
  );
}
export default TaskForm;
