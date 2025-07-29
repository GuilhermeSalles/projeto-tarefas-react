import { useNavigate, useSearchParams } from "react-router-dom";
import tarefaImg from "../assets/img/tarefas-default.webp";
import { ChevronLeftIcon } from "lucide-react";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "Default Task Title";
  const description =
    searchParams.get("description") || "No description provided.";
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-300 to-slate-500 flex items-center justify-center px-4 py-12 relative">
      {/* Conteúdo Principal */}
      <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl shadow-xl p-10 max-w-2xl w-full flex flex-col items-center space-y-6 transition-all">
        {/* Botão Voltar */}
        <button
          className="absolute top-6 left-6 flex items-center gap-1 text-slate-600 hover:text-slate-800 text-sm font-medium transition"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon className="w-4 h-4" />
          Voltar
        </button>

        <h2 className="text-3xl font-semibold text-slate-900 tracking-tight text-center">
          📌 Detalhes da Tarefa
        </h2>

        <img
          src={tarefaImg}
          alt="Task"
          className="w-32 h-32 rounded-full object-cover border-[5px] border-white shadow-md hover:scale-105 transition-transform"
        />

        <p className="text-slate-600 text-center text-base max-w-md leading-relaxed">
          Veja abaixo os detalhes completos da tarefa selecionada.
        </p>

        <div className="w-full bg-white border border-slate-100 rounded-xl shadow-inner p-6 text-center">
          <h1 className="text-2xl font-medium text-slate-800 mb-2">{title}</h1>
          <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
