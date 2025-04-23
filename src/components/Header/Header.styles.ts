"use client";

import styled from "styled-components";
import Link from "next/link";

export const HeaderContainer = styled.header.attrs({
  className: "navbar bg-base-200 px-4",
})``;

export const Brand = styled(Link).attrs({
  className: "btn btn-ghost normal-case text-xl",
})``;

export const Nav = styled.div.attrs({
  className: "flex-none",
})``;

export const Menu = styled.ul.attrs({
  className: "menu menu-horizontal px-1",
})``;

export const MenuItem = styled.li``;

export const MenuLink = styled(Link)``;
