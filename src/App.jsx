import Task from "./Component/Task";
import TaskForm from "./Component/TaskForm";

function App() {
  return (
    <main className="bg-zinc-600 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <Task />
      </div>
    </main>
  );
}
export default App;
