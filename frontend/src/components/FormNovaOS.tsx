import React, { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

interface FormData {
    nome_cliente: string;
    status: string;
    data_entrada: string;
    data_saida?: string;
}

const FormNovaOS: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>({
    nome_cliente: "",
    status: "aguardando_checklist",
    data_entrada: "",
    data_saida: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/ordem_de_servicos", { ordem_servico: form });
      navigate("/"); // redireciona para listagem
    } catch (err) {
      console.error("Erro ao criar OS:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md w-[90%] mx-auto mt-10"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Nova Ordem de Serviço
      </h2>

      <label className="block mb-2 text-gray-700">Cliente</label>
      <input
        name="nome_cliente"
        value={form.nome_cliente}
        onChange={handleChange}
        className="border rounded p-2 w-full mb-4"
        required
      />

      <label className="block mb-2 text-gray-700">Status</label>
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="border rounded p-2 w-full mb-4"
      >
        <option value="aguardando_checklist">Aguardando checklist</option>
        <option value="aguardando_orcamento">Aguardando orçamento</option>
        <option value="em_andamento">Em andamento</option>
        <option value="concluida">Concluída</option>
      </select>

      <label className="block mb-2 text-gray-700">Data de Entrada</label>
      <input
        type="date"
        name="data_entrada"
        value={form.data_entrada}
        onChange={handleChange}
        className="border rounded p-2 w-full mb-4"
        required
      />

      <label className="block mb-2 text-gray-700">Data de Saída</label>
      <input
        type="date"
        name="data_saida"
        value={form.data_saida}
        onChange={handleChange}
        className="border rounded p-2 w-full mb-4"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
      >
        {loading ? "Salvando..." : "Criar OS"}
      </button>
    </form>
  );
};

export default FormNovaOS;