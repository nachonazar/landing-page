import React from "react";
import Menu from "./components/shared/Menu";
import Inicio from "./components/pages/Inicio";
import Footer from "./components/shared/Footer";
import WhatsAppButton from "./components/shared/WhatsAppButton";

function App() {
  return (
    <>
      <Menu />
      <main>
        <Inicio />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
