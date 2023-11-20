import styled from "styled-components";

export const FormContainer = styled.div`
  margin: auto;
  padding: 5rem;
  max-width: 50rem;
`;

// 입력 form 스타일
export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2rem;
  border: 1px solid #0094ff;
  padding: 1rem 1.5rem;
  margin-bottom: 3rem;
`;

export const Input = styled.input`
  width: 100%;
  border: none;

  &:focus {
    outline: none;
  }
`;

// 회원가입, 로그인 버튼
export const BtnLogin = styled.button`
  width: 50%;
  padding: 1rem;
  margin-left: 50%;

  background-color: #73bcff;
  border: none;
  border-radius: 2rem;
  color: white;

  &:hover {
    background-color: #bcdfff;
    color: black;
  }
`;

export const BtnLogout = styled.button`
  width: 50%;
  padding: 1rem;
  margin-left: 50%;

  background-color: #73bcff;
  border: none;
  border-radius: 2rem;
  color: white;

  &:hover {
    background-color: #bcdfff;
    color: black;
  }
`;

export const LoginHelper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;
