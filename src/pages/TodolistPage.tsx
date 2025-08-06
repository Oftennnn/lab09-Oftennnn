import TaskCard from "../components/TaskCard";
import TodoModal from "../components/Modal";
import { type TaskCardProps } from "../libs/Todolist";
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState<TaskCardProps[]>([
    {
      id: "1",
      title: "Read a book",
      description: "Vite + React + Bootstrap + TS",
      isDone: false,
    },
    {
      id: "2",
      title: "Write code",
      description: "Finish project for class",
      isDone: false,
    },
    {
      id: "3",
      title: "Deploy app",
      description: "Push project to GitHub Pages",
      isDone: true,
    },
  ]);
  const handleadd = ( newTask:TaskCardProps) => {

          const newTasks = [...tasks, newTask];
          setTasks(newTasks);
  };
  const toggleDone = (taskId: string) => {
    const newTasks = tasks.map((todo: TaskCardProps) =>
      todo.id === taskId ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTasks(newTasks);
  };
  const deleteTask = (taskId: string) => {
    const newTasks = tasks.filter((todo: TaskCardProps) => todo.id !== taskId);
    setTasks(newTasks);
  }
  const allLength = tasks.length;
  const doneLength = tasks.filter((todo: TaskCardProps) => todo.isDone).length;
  

  return (
    <div className="col-12 m-2 p-0">
      <div className="container text-center">
        <h2>Todo List</h2>
        <span className="m-2">
          All : ({allLength}) Done : ({doneLength})
        </span>
        <button
          type="button"
          className="btn btn-primary my-3"
          data-bs-toggle="modal"
          data-bs-target="#todoModal"
        >
          Add
        </button>
        {/* Modal Component */}
        <TodoModal onAdd={handleadd}/>
        {/* TaskCard Component */}
        {tasks.map((task) => (
          <TaskCard
            id={task.id}
            title={task.title}
            description={task.description}
            isDone={task.isDone}
            DoneTask={toggleDone}
            DeleteTask={deleteTask}
            key={task.id}
            
          />
        ))}
      </div>
    </div>
  );
}

export default App;
