import React from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <MainHeader>
      <NavLink to="/">
        {" "}
        <img className="logo" src="./images/logo.png" alt="images" />{" "}
      </NavLink>
      <Nav />
    </MainHeader>
  );
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  img {
    height: 8rem;
    width: 10rem;
    position: absolute;
    top: 0%;
    left: 0%;
  }
`;

export default Header;
