import React, { useEffect, useState } from "react";
import './Cadastro.css';

const Cadastro: React.FC = () => {
  const [numeroOS, setNumeroOS] = useState<number>(1);
  const [dataEntrada, setDataEntrada] = useState<string>("");

  useEffect(() => {
    // Busca o último número salvo e soma 1
    const ultimoNumero = localStorage.getItem("ultimoNumeroOS");
    const novoNumero = ultimoNumero ? parseInt(ultimoNumero) + 1 : 1;

    setNumeroOS(novoNumero);
    localStorage.setItem("ultimoNumeroOS", novoNumero.toString());

    const hoje = new Date().toLocaleDateString("pt-BR");
    setDataEntrada(hoje);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Ordem de serviço ${numeroOS} salva!`);
  };

  return (
        <div className="form-container">
        <h2 className="titulo-os">Cadastro de OS</h2>
        <form onSubmit={handleSubmit}>
            <div className="linha-topo">
            <div className="form-group pequeno">
                <label htmlFor="numero">Número da Ordem</label>
                <input type="text" id="numero" name="numero" value={numeroOS} readOnly />
            </div>

            <div className="form-group pequeno direita">
                <label htmlFor="entrada">Data de Entrada</label>
                <input type="text" id="entrada" name="entrada" value={dataEntrada} readOnly />
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

        <button type="submit" className="btn">Salvar</button>
      </form>
    </div>
  );
};

export default Cadastro;
