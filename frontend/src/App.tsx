import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import OrdensServico from "./pages/OrdensServico";
import NovaOS from "./pages/NovaOS";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OrdensServico />} />
        <Route path="/nova-os" element={<NovaOS />} />
      </Routes>
    </Router>
  );
};

export default App;
