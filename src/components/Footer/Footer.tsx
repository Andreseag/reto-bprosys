import React from "react";
import { FooterContainer, Copyright, Rights } from "./Footer.styles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Copyright>© {new Date().getFullYear()} FinanBrand</Copyright>
      <Rights>Todos los derechos reservados.</Rights>
    </FooterContainer>
  );
};

export default Footer;
