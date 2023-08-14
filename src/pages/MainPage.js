import { Container } from "react-bootstrap";
import { styled } from "styled-components";
import article from '../assets/article.jpg';
import MainBg from "../components/MainBg";
import BtnMove from "../components/BtnMove"

// Title 박스
const TitleBox = styled.div`
  width : 80%;
  height : 300px;
  margin : auto;
  padding : 50px;
  border : 20px solid #f3ece8;
  border-radius : 50px;
  text-align : center;
  display : flex-column;
  align-items : center;
  font-size : 20px;
`;

// Card 이미지
const ArticleImg = styled.div`
  height : 350px;
  background-image : url(${article});
  background-size : cover;
  border-radius : 50px;
`;

// 기부 박스 배경 스타일
const ContributeStyle = styled.section`
  padding : 100px 0;
  text-align : center;
  background : #f3ece8;
`;

// 메인 Title
function Title(){
  return(
    <Container className="p-5">
        <TitleBox>
          <p className="fs-1">"</p>
          <p>소비자의 선택이 중요해지는 시대, ESG는 핵심 키워드이며 우리가 알아야할 가치입니다. 왜 알아야하는지 설명 핵심, 간결하게</p>
        </TitleBox>
    </Container>
  )
};

// Card
// str를 전달하여 사진 위치 변경
function Article(props){
  return(
    <Container className={`p-5 d-flex align-items-center ${props.position == "left" ? "flex-row" : "flex-row-reverse"}`}>
        <div className="p-5 col-sm-5">
          <h3 className="mb-3">{props.title}</h3>
          <p className="mb-3">{props.str}</p>
          <BtnMove str={props.btn} to={props.to}/>
        </div>
        
        <ArticleImg className="p-5 col-sm-7" />
        <div style={{clear : "both"}}></div>
    </Container>
  )
};

// 기부 박스
function Contribution(){
  return(
    <>
      <ContributeStyle>
        <Container>
          <h2 className="mb-5">Contribution</h2>
          <p>기여하고 싶으시다면</p>
          <p className="mb-5">다음 저장소에 PR을 보내주세요 :)</p>
          <BtnMove str="Send Now"/>
        </Container>
      </ContributeStyle>
    </>
  )
};


/**
 * < 메인 페이지 >
 * 메인 사진
 * 메인 Title
 * Card 1
 * Card 2
 * 기부 박스
 */
function MainPage(){
  return(
    <>
      <MainBg title="About Us" subtitle="Home / About Us"/>
      <Title />
      <Article position="left" title="What We Do" btn="Our team" to="team"
        str="우리 서비스는 어려운 ESG 개념을 보편화하기 위하여 출발하였습니다. ESG가 어렵기보다는 이제 친숙한 ESG의 사회적 보편화를 위하여 노력합니다."/>

      <Article position="right" title="The ultimate goal" btn="Our goal"
        str="소비자가 기업의 ESG경향을 파악, 분석하고 맞춤 소비를 할 수 있게 돕습니다. 습득, 학습, 공유의 3단계로 가치를 창출하려 합니다."/>
      <Contribution />
    </>
  )
};

export default MainPage;