import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const Error404 = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-surface-container-lowest text-center">
      <Container>
        <h1 className="font-headline-xl text-[100px] md:text-[140px] text-primary leading-none mb-4">
          404
        </h1>
        <h2 className="font-headline-md text-headline-lg text-on-background mb-6 tracking-tight">
          Página no encontrada
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg mx-auto leading-relaxed">
          Lo sentimos, no pudimos encontrar el enlace que estás buscando. Es posible que sea incorrecto o haya sido movido.
        </p>
        <Button as="a" href="/" variant="primary">
          Volver al inicio
        </Button>
      </Container>
    </section>
  );
};

export default Error404;