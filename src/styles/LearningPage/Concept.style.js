import styled from "styled-components";

export const Title = styled.h3`
  font-size : 1.3rem;
  line-height : 2.3rem;
`;

export const Blue = styled.span`
  color : #006FC0;
`;

export const CardBox = styled.div`
  margin: 3rem 0;
  text-align : left;
  display : flex;
  justify-content : space-evenly;
`;

export const Card = styled.div`
  width : 25%;
  padding : 1.5rem;
  border : 0.5px solid #EAEAEA;
  border-radius : 1rem;
`;

export const CardHeader = styled.h4`
  border-bottom : 1px solid #EAEAEA;
  padding : 0.5rem 0.5rem 1rem 0.5rem;
`;

export const CardList = styled.ul`
  line-height : 1.5rem;
  color : #006FC0;
  margin : 1rem 0 0 1.5rem;
  list-style : disc;

  & li+li{
    margin-top : 1rem;
  }
`;