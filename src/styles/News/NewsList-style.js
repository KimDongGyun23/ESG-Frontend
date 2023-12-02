import { styled } from "styled-components";

export const NewsListBlock = styled.div`
  box-sizing: border-box;
  margin: 2rem 0 0 2rem;
  width: 800px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const NewsBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LikeBtnContainer = styled.div`
  margin-left: auto;
`;
