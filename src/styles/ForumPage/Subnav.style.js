import styled from "styled-components";

export const Container = styled.div`
  display : flex;
  align-items : center;
  justify-content : space-between;
  margin-bottom : 1.5rem;

  .focused{
    background-color : #1682FD;
    color : white;
    
    &:hover{
      background-color : #1682FD;
    }
  }

  @media (max-width : 992px){
    align-items : flex-start;
    flex-direction : column-reverse;
  }
`;

export const BtnTag = styled.button`
  background-color : #EAEAEA;
  color : #808080;
  padding : 0.5rem;
  border : none;
  border-radius : 1rem;
  margin-right : 1rem;
  &:hover{
    background-color : #EAF5FF;
  }

  transition : background 0.2s;
`;

export const Form = styled.form`
  width : 30%;
  display : flex;

  @media (max-width : 992px){
    margin-bottom : 1rem;
    width : 100%;
  }
`;

export const BtnSearch = styled.button`
  border : none;
  background-color : inherit;
`;

export const Input = styled.input`
  width : 100%;
  padding : 0.5rem;
  border : none;

  &:focus{
    outline : none;
    border : 1px solid #EAEAEA;
  }
`;
