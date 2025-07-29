import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Task";
import { v4 } from "uuid";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

function App() {
  const [tasks, setTasks] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const totalPages = Math.ceil(tasks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTasks = tasks.slice(startIndex, startIndex + itemsPerPage);

  function isTaskCompleted(taskId) {
    const updated = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updated);
  }

  function onDeleteTaskClick(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function onAddTaskSubmit(newTask) {
    setTasks([
      ...tasks,
      {
        id: v4(),
        title: newTask.title,
        description: newTask.description,
        isCompleted: false,
      },
    ]);
  }

  function handleItemsPerPageChange(e) {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  }

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-slate-400 to-slate-500 flex justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        <h1 className="text-3xl text-slate-900 font-semibold text-center">
          Gerenciador de Tarefas
        </h1>

        <AddTask onAddTaskSubmit={onAddTaskSubmit} />

        <Tasks
          tasks={paginatedTasks}
          onTaskCompleted={isTaskCompleted}
          onTaskDeleted={onDeleteTaskClick}
        />

        {/* Informações + Seletor */}
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-00 text-sm mt-6 gap-4">
          <span>
            Total de <strong>{tasks.length}</strong> tarefa(s)
          </span>

          <div className="flex items-center gap-2">
            <label htmlFor="itemsPerPage">Mostrar:</label>
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="bg-white border border-slate-300 px-3 py-1 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
            >
              <option value={3}>3</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
            </select>
          </div>
        </div>

        {/* Paginação */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 text-slate-00 hover:text-slate-800 disabled:opacity-30"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-md text-sm ${
                currentPage === page
                  ? "bg-slate-800 text-white"
                  : "text-slate-00 hover:bg-slate-200"
              } transition`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-slate-800 hover:text-slate-100 disabled:opacity-30"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
