import { useState } from "react";
import { PlusIcon } from "lucide-react"; // ícone moderno, opcional

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (title.trim() && description.trim()) {
      onAddTaskSubmit({ title, description });
      setTitle("");
      setDescription("");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="mt-8 w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl shadow-xl p-8 space-y-6 transition-all">
      <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
        Nova Tarefa
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Título elegante da tarefa"
          className="w-full px-4 py-3 text-slate-800 bg-white border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all placeholder-slate-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Descrição clara e objetiva"
          className="w-full px-4 py-3 text-slate-800 bg-white border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all placeholder-slate-400"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white text-lg font-medium rounded-xl hover:bg-slate-800 active:scale-[0.98] transition-transform shadow-md"
      >
        <PlusIcon className="w-5 h-5" />
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTask;
