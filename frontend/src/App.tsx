import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-6">
      
      {/* Cabeçalho */}
      <h1 className="text-5xl font-extrabold text-cyan-600 drop-shadow-md mb-6">
        Vite + React + Tailwind 🚀
      </h1>

      {/* Card com contador */}
      <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center gap-4 w-full max-w-md">
        <p className="text-lg text-gray-700 font-medium">
          Contador: <span className="font-bold text-cyan-600">{count}</span>
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow transition-all duration-300"
        >
          Incrementar Contador
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow transition-all duration-300"
        >
          Resetar
        </button>
      </div>

      {/* Rodapé */}
      <p className="mt-8 text-gray-500 text-sm">
        Projeto rodando com <span className="font-bold">Vite</span>,{" "}
        <span className="font-bold">React</span> e{" "}
        <span className="font-bold">Tailwind CSS</span>.
      </p>
    </div>
  );
}
