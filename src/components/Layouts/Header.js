import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import * as S from "../../styles/Layouts/Header.style";
import { getCookie, removeCookie } from "../../context/cookie";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const { login, logout } = useAuth();

  const cookie = getCookie("access-token");
  return (
    <>
      <Navbar className="my-3" expand="md" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">LOVESG</Navbar.Brand>
          <S.Toggler aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-center"
            id="basic-navbar-nav"
          >
            <Nav className="mx-auto">
              <S.NavLink href="/">HOME</S.NavLink>
              <S.NavLink href="/esg">나의ESG</S.NavLink>
              <S.NavLink href="/learning">ESG학습</S.NavLink>
              <S.NavLink href="/forum">포럼</S.NavLink>
              <S.NavLink href="/introduce">LOVESG소개</S.NavLink>
            </Nav>

            <Nav className="text-end">
              {cookie ? (
                <button onClick={logout}>로그아웃</button>
              ) : (
                <Nav.Link onClick={login} href="/login">
                  로그인
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
