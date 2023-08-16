import { styled } from "styled-components";

// 회원가입, 로그인 버튼
const BtnLogin = styled.button`
  width : 50%;
  float : right;
  padding: 15px;
  background-color: #73BCFF;
  border : none;
  border-radius : 50px;
  color: white;
  cursor: pointer;

  &:hover{
    background-color: #BCDFFF;
    color : black;
  }

  &::after{
    content : ' ';
    display : block;
    clear : both;
  }
`;

export default BtnLogin;