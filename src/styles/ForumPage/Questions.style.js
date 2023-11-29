import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  &::after {
    content: "";
    display: block;
    clear: both;
  }

  .unvisible {
    display: none;
  }
`;

export const Card = styled.div`
  width: 80%;
  padding: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #eaeaea;
  border-radius: 1rem;
  box-shadow: 2px 1px 5px 0 rgba(0, 0, 0, 0.15);
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(102%);
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  .date {
    margin-top: 0.7rem;
    font-size: 0.8rem;
    color: #808080;
  }
`;

export const Img = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  object-position: left;
  margin-right: 1rem;
  border-radius: 2rem;
`;

export const Kebab = styled.i`
  font-size: 1.3rem;
  margin-right: 1rem;
  margin-left: auto;
  color: #808080;
`;

export const Text = styled.div`
  margin: 1.5rem 0;
  color: black;

  & > h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.3rem;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Tag = styled.div`
  padding: 0.5rem 1rem;
  background-color: #eaeaea;
  color: #808080;
  border-radius: 0.5rem;
  margin-right: 1rem;
`;

export const Like = styled.div`
  margin-left: 1rem;
  color: #808080;
`;

export const BtnWrite = styled.button`
  background-color: #1682fd;
  color: white;
  padding: 1rem 3rem;
  border: none;
  border-radius: 2rem;
  float: left;
  transition: transform 0.2s;
  &:hover {
    color: white;
    transform: scale(105%);
  }
`;

export const pageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;
  align-content: center;
`;
