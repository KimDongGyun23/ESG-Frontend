import { styled } from "styled-components";

// Register 버튼
// 마우스 올릴 시 이벤트 추가
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
    content : '';
    display : block;
    clear : both;
  }
`;

export default BtnLogin;