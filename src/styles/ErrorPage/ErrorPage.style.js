import { styled } from "styled-components";

export const Container = styled.div`
  display : grid;
  grid-template-columns : 1fr 1fr;
  gap : 2rem;
  align-items : center;
  padding : 3rem 20%;
`;

// Text 박스
export const TextBox = styled.div`
  & h2{
    font-size : 5rem;
    margin-bottom : 16px;
  }
  & p{
    font-size : 1.5rem;
    line-height : 3rem;
    margin-bottom : 1.5rem;
  }
`;