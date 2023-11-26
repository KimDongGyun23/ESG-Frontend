import { Navbar, Container, Nav } from "react-bootstrap";
import * as S from "../../styles/Layouts/Header.style";
import { useLocation } from "react-router-dom";
import { getCookie, removeCookie } from "../../context/cookie";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/images/eco.png";

function Header() {
  const { login, logout } = useAuth();
  const location = useLocation(); // 현재 경로 가져오기
  const cookie = getCookie("access-token");
  return (
    <>
      <Navbar className="my-3" expand="md" data-bs-theme="light">
        <Container>
          <S.NavbarBrand href="/">
            <S.Image src={logo} alt="LOVESG logo" />
            LOVESG
          </S.NavbarBrand>
          <S.Toggler aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-center"
            id="basic-navbar-nav"
          >
            <Nav className="mx-auto">
              <S.NavLink
                href="/"
                style={{ color: location.pathname === "/" && "#1389D0" }}
              >
                HOME
              </S.NavLink>
              <S.NavLink
                href="/esg"
                style={{ color: location.pathname === "/esg" && "#1389D0" }}
              >
                나의ESG
              </S.NavLink>
              <S.NavLink
                href="/learning"
                style={{
                  color: location.pathname === "/learning" && "#1389D0",
                }}
              >
                ESG학습
              </S.NavLink>
              <S.NavLink
                href="/forum"
                style={{ color: location.pathname === "/forum" && "#1389D0" }}
              >
                포럼
              </S.NavLink>
              <S.NavLink
                href="/introduce"
                style={{
                  color: location.pathname === "/introduce" && "#1389D0",
                }}
              >
                LOVESG소개
              </S.NavLink>
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
