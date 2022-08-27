import { createContext, useState, useEffect } from "react";
import { taksList } from "../data/TaskList";


export const TaskContext = createContext();

export function ContextProvider(props) {
    const [tasks, setTaks] = useState([]);

    useEffect(() => {
      setTaks(taksList);
    }, []);
  
    const crearTarea = (tTarea) => {
      setTaks([...tasks, {
        id: tasks.length,
        title: tTarea.title,
        descripcion: tTarea.description
      }])
    };

    const eliminarTarea=(tasksID)=>{
      setTaks(tasks.filter(tasks => tasks.id !== tasksID))
    }
  return (
    <TaskContext.Provider value={{
      tasks,
      crearTarea,
      eliminarTarea,
    }}>{props.children}</TaskContext.Provider>
  );
}

