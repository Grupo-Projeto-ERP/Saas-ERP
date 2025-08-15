import React from "react";
import "./Cadastro.css";

const Cadastro: React.FC = () => {
  return (
    <div className="form-container">
      <h2 className="titulo-os">Cadastro de OS</h2>
      <form>
        <div className="linha-topo">
          <div className="form-group pequeno">
            <label htmlFor="numero">Número da Ordem</label>
            <input type="text" id="numero" name="numero" value="" readOnly />
          </div>

          <div className="form-group pequeno direita">
            <label htmlFor="entrada">Data de Entrada</label>
            <input
              type="date"
              id="entrada"
              name="entrada"
              value=""
              readOnly
            />
          </div>

          <div className="form-group pequeno direita">
            <label htmlFor="saida">Data de Saída</label>
            <input type="date" id="saida" name="saida" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select id="status" name="status">
            <option>Aguardando Checklist</option>
            <option>Aguardando Orçamento</option>
            <option>Em Andamento</option>
            <option>Concretizada</option>
          </select>
        </div>

        <button type="button" className="btn">Salvar</button>
      </form>
    </div>
  );
};

export default Cadastro;
