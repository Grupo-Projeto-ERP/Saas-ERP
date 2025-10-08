import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import OrdensServico from "./pages/OrdensServico";
import NovaOS from "./pages/NovaOS";

const App: React.FC = () => {
  return (
    <Router>
      <>
        {/* Toaster global — aparece em qualquer rota */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />

        {/* Rotas */}
        <Routes>
          <Route path="/" element={<OrdensServico />} />
          <Route path="/nova-os" element={<NovaOS />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
