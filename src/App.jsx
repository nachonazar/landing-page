import React from "react";
import Menu from "./components/shared/Menu";
import Inicio from "./components/pages/Inicio";
import Footer from "./components/shared/Footer";
import WhatsAppButton from "./components/shared/WhatsAppButton";
import Error404 from "./components/pages/Error404";

function App() {
  if (window.location.pathname !== "/") {
    return <Error404 />;
  }
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
