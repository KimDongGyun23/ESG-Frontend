import { styled } from "styled-components";
import { Container } from "react-bootstrap";

export const TitleBox = styled(Container)`
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  & > div {
    width: 40%;
  }
  & > div:last-child {
    text-align: right;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    & > div {
      width: 100%;
    }
    & > div:last-child {
      text-align: left;
      margin-top: 3rem;
    }
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.7rem;
`;

export const ContributionBox = styled.div`
  background: #eaf5ff;
  padding: 3rem 0;
  justify-content: space-evenly;
  grid-template-columns: 20rem 20rem;
`;

export const ContributionTitle = styled.h2`
  margin: 5rem;
  color: black;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
`;

export const ContributionContent = styled.p`
  margin: 2.5rem;
  font-size: 1.8rem;
  line-height: 1.7rem;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  margin-bottom: 7rem;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color: white;
  font-size: 1.8rem;
`;

export const GitHubButton = styled.a`
  display: inline-block;
  padding: 2rem 2rem;
  background-color: darkgray;
  border-radius: 2rem;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.5s;
  box-shadow: 5px 5px 5px 0px rgb(0, 0, 0, 0.5);
  &:hover {
    background-color: #2e9afe;
  }
`;

// 프로필  Box
export const Profile = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 20rem);
  row-gap: 2rem;
  justify-content: space-evenly;
  text-align: center;
`;

// 프로필 이미지
export const ProfileImg = styled.img`
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
`;

// 프로필 이름
export const Name = styled.p`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

// 프로필 도시
export const City = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
`;
