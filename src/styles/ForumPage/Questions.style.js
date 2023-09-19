import styled from "styled-components";


export const Card = styled.div`
  padding : 1.5rem;
  border : 1px solid gray;
  border-radius : 1rem;
  margin-bottom : 1.5rem;

`;

export const Profile = styled.div`
  display : flex;

  &>img{
    width : 4rem;
    height : 4rem;
    object-fit : cover;
    object-position: left;
    margin-right : 1rem;
    border-radius : 2rem;
  }

  .name{  margin : 0.7rem 0;  }

  .date{  font-size : 0.8rem;  }

`;

export const Text = styled.div`
  margin : 1rem 0;

  &>h3{
    font-size : 1.5rem;
    font-weight : bold;
    margin-bottom : 1.3rem;
  }

`;

export const Footer = styled.div`
  display : flex;
  justify-content : space-between;

`;