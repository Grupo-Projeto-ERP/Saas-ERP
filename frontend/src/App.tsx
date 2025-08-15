import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormularioOS from "./Cadastro";
import ListaOS from "./Listagem";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Menu de Navegação */}
        <nav style={styles.nav}>
          <Link style={styles.link} to="/nova">Nova OS</Link>
          <Link style={styles.link} to="/">Lista de OS</Link>
        </nav>

        {/* Rotas */}
        <Routes>
          <Route path="/" element={<ListaOS />} />
          <Route path="/nova" element={<FormularioOS />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#007bff",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default App;
