import styled from "styled-components";

export const List = styled.div`
  margin: 0 0 1rem 2rem;
  padding: 1.3rem 0 1.3rem 1rem;
  @media (max-width: 992px) {
    margin: 0;
    width: 33%;
    text-align: center;
    display: inline-block;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -5rem;
  margin-bottom: 2rem;

  p {
    margin: 1rem 1rem 2rem 1rem;
    font-size: 1.5rem;
  }
`;
