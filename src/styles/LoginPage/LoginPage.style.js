import { styled } from "styled-components";

// 로그인, 회원가입 버튼
export const Btn = styled.button`
  width : 13rem;
  padding: 1rem;
  background-color: ${props => props.$log ? '#73BCFF' : '#BCDFFF'};
  border : none;
  border-radius : 4rem;
  color: ${props => props.$log ? 'white' : 'black'};
  cursor: pointer;
  transition: all 0.2s ease;
`;

// 로그인, 회원가입 선택 버튼 배경
export const LoginBox = styled.div`
  width : 30rem;
  margin: 1rem auto;
  border : 1rem solid #BCDFFF;
  border-radius : 4rem;
  background-color: #BCDFFF;
`;