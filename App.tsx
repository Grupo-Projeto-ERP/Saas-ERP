import React, { useEffect, useState } from 'react';
import './App.css'; // CSS separado

const OrdemServicoForm: React.FC = () => {
  const [numero, setNumero] = useState<string>('00001');
  const [entrada, setEntrada] = useState<string>('');
  const [saida, setSaida] = useState<string>('');
  const [cliente, setCliente] = useState<string>('');

  useEffect(() => {
    const now = new Date();
    const formattedNow = now.toISOString().slice(0, 16); // formato datetime-local
    setEntrada(formattedNow);

    // Geração automática de número de OS (placeholder)
    const generatedNumero = String(Math.floor(Math.random() * 99999) + 1).padStart(5, '0');
    setNumero(generatedNumero);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio
    alert('Formulário enviado!');
  };

  return (
    <div className="form-container">
      <h2>Dados Gerais</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="left-group">
            <div className="form-group" id="os">
              <label htmlFor="numero">Nº OS</label>
              <input type="text" id="numero" name="numero" value={numero} readOnly maxLength={5} />
            </div>

            <div className="form-group" id="cliente">
              <label htmlFor="cliente">Cliente</label>
              <input
                type="text"
                id="cliente"
                name="cliente"
                value={cliente}
                onChange={(e) => setCliente(e.target.value)}
                maxLength={140}
              />
            </div>
          </div>

          <div className="right-group">
            <div className="form-group" id="data-entrada">
              <label htmlFor="entrada">Data Entrada</label>
              <input type="datetime-local" id="entrada" name="entrada" value={entrada} readOnly />
            </div>

            <div className="form-group" id="data-saida">
              <label htmlFor="saida">Data Saída</label>
              <input
                type="datetime-local"
                id="saida"
                name="saida"
                value={saida}
                onChange={(e) => setSaida(e.target.value)}
              />
            </div>
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

export default OrdemServicoForm;
