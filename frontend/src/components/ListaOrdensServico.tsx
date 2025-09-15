import React, { useEffect, useState } from "react";
import api from "../services/api";
import { formatDateStr } from "../utils/formatDate";
import { formatStatus } from "../utils/status";

interface OrdemServico {
  id: number;
  numero_os: string;
  nome_cliente: string;
  status: string;
  data_entrada: string;
  data_saida?: string | null;
}

const ListaOrdensServico: React.FC = () => {
  const [ordens, setOrdens] = useState<OrdemServico[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrdens = async () => {
      try {
        const response = await api.get("/ordem_de_servicos"); 
        setOrdens(response.data);
      } catch (error) {
        console.error("Erro ao buscar OS:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrdens();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-600 text-lg font-medium">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-[90%] mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Lista de Ordens de Serviço
        </h2>
        <button
          onClick={() => (window.location.href = "/nova-os")}
          className="bg-blue-600 hover:bg-blue-700 text-white text-xl rounded-full w-10 h-10 flex items-center justify-center shadow-md transition duration-200"
        >
          +
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-center border border-gray-200 rounded-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-2 px-4">Nº OS</th>
              <th className="py-2 px-4">Cliente</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Data Entrada</th>
              <th className="py-2 px-4">Data Saída</th>
            </tr>
          </thead>
          <tbody>
            {ordens.length > 0 ? (
              ordens.map((os) => (
                <tr key={os.id} className="border-b hover:bg-gray-100 transition">
                  <td className="py-2 px-4">{os.numero_os}</td>
                  <td className="py-2 px-4">{os.nome_cliente}</td>
                  <td className="py-2 px-4">{formatStatus(os.status)}</td>
                  <td className="py-2 px-4">{formatDateStr(os.data_entrada)}</td>
                  <td className="py-2 px-4">{os.data_saida ? formatDateStr(os.data_saida) : "—"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-4 text-gray-500">
                  Nenhuma OS encontrada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaOrdensServico;
