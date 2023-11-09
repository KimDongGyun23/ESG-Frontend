import { styled } from "styled-components";
import YouTube from "react-youtube";

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
`;

export const RoundedYouTube = styled(YouTube)`
  border: 1px solid lightgray;
  padding: 20px 20px;
  border-radius: 1rem 1rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  overflow: hidden; /* 테두리가 넘치지 않도록 함 */
`;

export const Text = styled.p`
  font-size: 2rem;
  line-height: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;
