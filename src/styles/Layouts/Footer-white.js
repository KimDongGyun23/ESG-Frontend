import { styled } from "styled-components";

// 외부 Footer 영역 설정
export const Container = styled.div`
  padding: 3rem 0;
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: 20rem 20rem;
`;

export const TextBox = styled.div`
  padding: 2rem;
  line-height: 2rem;

  & > h5 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  & > div {
    margin-bottom: 1rem;
  }
`;

export const CopyRight = styled.p`
  grid-column: 1 / 3;
  text-align: center;
`;
