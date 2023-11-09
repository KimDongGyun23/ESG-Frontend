import { styled } from "styled-components";
import YouTube from "react-youtube";

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem;
`;

export const StyledYouTube = styled(YouTube)`
  border: 1px solid lightgray;
  border-radius: 1rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  overflow: hidden; /* 테두리가 넘치지 않도록 함 */
  padding: 20px;
  margin-bottom: 2rem;
`;

export const Text = styled.p`
  font-size: 2em;
  line-height: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`;
