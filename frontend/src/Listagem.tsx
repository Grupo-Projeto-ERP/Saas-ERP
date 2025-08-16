import React from "react";
import "./Listagem.css";

const Listagem: React.FC = () => {
  // Dados apenas para visualização
  const ordens = [
    { numero: 1, status: "Aguardando Checklist", entrada: "14/08/2025", saida: "15/08/2025" },
    { numero: 2, status: "Em Andamento", entrada: "13/08/2025", saida: "—" },
    { numero: 3, status: "Concretizada", entrada: "10/08/2025", saida: "12/08/2025" },
  ];

  return (
    <div className="lista-container">
      <h2>Lista de Ordens de Serviço</h2>
      <table>
        <thead>
          <tr>
            <th>Número</th>
            <th>Status</th>
            <th>Data de Entrada</th>
            <th>Data de Saída</th>
          </tr>
        </thead>
        <tbody>
          {ordens.map((os) => (
            <tr key={os.numero}>
              <td>{os.numero}</td>
              <td>{os.status}</td>
              <td>{os.entrada}</td>
              <td>{os.saida}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listagem;
