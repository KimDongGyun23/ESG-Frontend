import { Container } from "react-bootstrap";
import { styled } from "styled-components";

// MainContainer
// props로 넘겨받은 position 값에 따라서 이미지와 글자 위치 변경
export const CardContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) =>
    props.position === "left" ? "row" : "row-reverse"};
  margin-bottom: 150px;
`;

// Card Text
export const TextBox = styled.div`
  width: 45%;
  padding: 0 1rem;
`;

// Card 이미지
export const CardImg = styled.div`
  width: 55%;
  height: 22rem;
  background-image: url(${(props) => props.img});
  background-size: cover;
  border-radius: 3rem;
`;
