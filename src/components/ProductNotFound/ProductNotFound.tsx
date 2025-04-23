import React from "react";
import { Container, Message } from "./ProductNotFound.styles";

const ProductNotFound: React.FC = () => {
  return (
    <Container>
      <Message>Producto no encontrado</Message>
    </Container>
  );
};

export default ProductNotFound;
