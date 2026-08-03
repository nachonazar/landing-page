import React from "react";
import Menu from "./components/shared/Menu";
import Inicio from "./components/pages/Inicio";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <Menu />
      <main>
        <Inicio />
      </main>
      <Footer />
    </>
  );
}

export default App;