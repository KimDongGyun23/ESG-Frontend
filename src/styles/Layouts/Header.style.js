import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

// 로그인 박스 스타일
// export const Login = styled.div`
//   display : flex;
//   align-items : center;
// `;

export const Toggler = styled(Navbar.Toggle)`
  border : none;

  &:focus{
    box-shadow : none;
  }
`;

export const NavLink = styled(Nav.Link)`
  text-align : center;
  margin-right : 2rem;

  @media (max-width : 767px){
    margin-right : 0;
    line-height : 3rem;
    border-bottom : 0.5px solid #d3d6cf;
  }
`;