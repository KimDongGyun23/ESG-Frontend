import * as S from "../../styles/MainPage/MainCard.style"

// props.position을 통하여 이미지와 글자 위치 변경
function MainCard(props){
  return(
    <S.CardContainer position={props.position}>
      <S.TextBox>
        {props.children}
      </S.TextBox>
      <S.CardImg img={props.img}/>
    </S.CardContainer>
  )
};

export default MainCard;