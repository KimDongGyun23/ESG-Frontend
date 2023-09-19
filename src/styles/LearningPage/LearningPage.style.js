import { Container } from "react-bootstrap";
import styled from "styled-components";

export const Main = styled(Container)`
  width : 80%;
  padding : 0 2rem;
  text-align : center;
  margin-bottom : 10rem;
`;

export const Sidebar = styled.div`
  width : 20%;
  margin-top : -3rem;
  padding-left : 2rem;
  font-weight : bold;

  .focused {
    background-color: #EAF5FF;
    border-left : 0.3rem solid #006FC0;
    color : #006FC0;
  }
  @media (max-width : 992px){
    width : 80%;
    margin : -3rem auto 0;
  }
`;

export const Title = styled.h3`
  font-size : 1.5rem;
  color : #808080;
  margin-bottom : 2rem;
`;

export const List = styled.div`
  margin : 0 0 1rem 2rem;
  padding : 1.3rem 0 1.3rem 1rem;

  @media (max-width : 992px){
    width : 30%;
    text-align : center;
    margin : 0 1% 5rem 1%;
    display : inline-block;
  }
`;