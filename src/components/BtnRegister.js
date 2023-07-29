import { styled } from "styled-components";

// Register 버튼
// 마우스 올릴 시 이벤트 추가
const BtnRegister = styled.button`
  width : 50%;
  float : right;
  padding: 15px;
  background-color: rgb(148, 90, 21);
  border : none;
  border-radius : 50px;
  color: #f3ece8;
  cursor: pointer;

  &:hover{
    background-color: #f3ece8;
    color : rgb(148, 90, 21);
  }

  &::after{
    content : '';
    display : block;
    clear : both;
  }
`;

export default BtnRegister;