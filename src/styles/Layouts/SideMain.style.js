import { Container } from "react-bootstrap";
import styled from "styled-components";

export const Wrapper = styled.div`
  display : flex;
  flex-direction : row;

  @media (max-width : 992px){
    flex-direction : column;
  }
`;

export const Main = styled(Container)`
  width : 80%;
  padding : 0 2rem;
  text-align : center;
  margin-bottom : 10rem;
`;

export const Sidebar = styled.div`
  width : 20%;
  padding-left : 2rem;
  font-weight : bold;

  .focused {
    background-color: #EAF5FF;
    border-left : 0.3rem solid #006FC0;
    color : #006FC0;
  }

  @media (max-width : 992px){
    width : 80%;
    margin : 0 auto;
  }
`;

export const Title = styled.h3`
  font-size : 1.5rem;
  color : #808080;
  margin-bottom : 2rem;
`;