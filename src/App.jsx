import React from 'react';
import Menu from "./components/shared/Menu";
import Inicio from "./components/pages/Inicio";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-on-background font-sans">
      <Menu />
      <Inicio />
      <Footer />
    </div>
  );
}

export default App;