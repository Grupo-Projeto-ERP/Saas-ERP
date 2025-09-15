import React from "react";
import Cabecalho from "../components/Cabecalho";
import ListaOrdensServico from "../components/ListaOrdensServico";

const OrdensServico: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Cabecalho />
      <ListaOrdensServico />
    </div>
  );
};

export default OrdensServico;
