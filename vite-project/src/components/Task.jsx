import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskCompleted, onTaskDeleted }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(taskId) {
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      navigate(
        `/task?title=${encodeURIComponent(
          task.title
        )}&description=${encodeURIComponent(task.description)}`
      );
    }
  }

  return (
    <div className="mt-8 w-full max-w-3xl mx-auto bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl shadow-2xl p-8 transition-all">
      <h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-6">
        📋 Lista de Tarefas
      </h2>

      {tasks.length === 0 ? (
        <p className="text-center text-slate-500 text-lg py-10">
          Nenhuma tarefa cadastrada ainda.
        </p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between gap-4 bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => onTaskCompleted(task.id)}
                className={`flex-1 text-left text-slate-800 font-medium text-lg transition ${
                  task.isCompleted
                    ? "line-through text-slate-400"
                    : "hover:text-slate-900"
                }`}
              >
                {task.title}
              </button>

              <div className="flex gap-2">
                <button
                  onClick={() => onSeeDetailsClick(task.id)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition"
                  title="Ver detalhes"
                >
                  <ChevronRightIcon className="w-5 h-5 text-slate-600 hover:text-slate-800 transition" />
                </button>

                <button
                  onClick={() => onTaskDeleted(task.id)}
                  className="p-2 rounded-xl bg-red-50 hover:bg-red-100 transition"
                  title="Excluir tarefa"
                >
                  <TrashIcon className="w-5 h-5 text-red-500 hover:text-red-700 transition" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tasks;
