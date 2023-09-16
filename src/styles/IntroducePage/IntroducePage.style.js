import { styled } from "styled-components";
import { Container } from "react-bootstrap";

// 프로필  Box 
export const Profile = styled(Container)`
  display : grid;
  grid-template-columns: repeat(auto-fill, 20rem);
  row-gap : 2rem;
  justify-content : space-evenly;
  text-align : center;
`;

// 프로필 이미지
export const ProfileImg = styled.img`
  width : 100%;
  padding : 1rem;
  border-radius : 1rem;
`;

// 프로필 이름
export const Name = styled.p`
  font-size : 2rem;
  margin-bottom : 0.5rem;
`;

// 프로필 도시
export const City = styled.p`
  font-size : 1.3rem;
  margin-bottom : 1.5rem;
`;