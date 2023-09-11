import { Container } from "react-bootstrap";
import { styled } from "styled-components";

export const TitleContainer = styled(Container)`
  width : 80%;
  height : 25rem; 
  position : relative;
  margin-bottom : 150px;
  border : 10px solid #73BCFF;
  border-radius : 3rem;
`;

// Box 디자인
export const BackBox = styled.div`
  width : 60%;
  height : 110%;
  min-height : 300px;
  background : white;
  position : absolute;
  top : -10px;
  left : 0;
  right : 0;
  margin : 0 auto;
`;

// TextBox
export const TextBox = styled.div`
  width : 80%;
  height : 20rem;
  padding : 2rem;
  display : flex;
  flex-direction : column;
  justify-content: space-evenly;
  text-align : center;
  font-size : 1.5rem;
  position : absolute;
  top : 1.875rem;
  left:0;
  right : 0;
  margin : auto;
`;