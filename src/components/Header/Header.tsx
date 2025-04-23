import React from "react";
import {
  HeaderContainer,
  Brand,
  Nav,
  Menu,
  MenuItem,
  MenuLink,
} from "./Header.styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="flex-1">
        <Brand href="/">FinanBrand</Brand>
      </div>
      <Nav>
        <Menu>
          <MenuItem>
            <MenuLink href="/">Inicio</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/about">Nosotros</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/contact">Contacto</MenuLink>
          </MenuItem>
        </Menu>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
