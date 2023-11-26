import * as S from "../../styles/MainPage/MainPage.style";
import Banner from "../../components/Layouts/Banner";
import MainCard from "./MainCard";
import MainTitle from "./MainTitle";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import MainYoutube from "./MainYoutube";

/**
 * < 메인 페이지 >
 * 메인 사진
 * 메인 Title
 * Card 1
 * Card 2
 * Card 3
 */
function MainPage(props) {
  const isLogin = props.isLogin; // Login state 어떻게 반영할 것인지?
  return (
    <>
      <Banner title="About ESG" subtitle="메인 페이지" />
      <MainTitle />
      <MainYoutube />
      <MainCard position="left" img={card1}>
        <S.HeaderText>E (Environment)</S.HeaderText>
        <S.Text>
          우리 서비스는 어려운 ESG개념을 보편화하기위하여 출발하였습니다. ESG가
          어렵기보다는 이제 친숙한 ESG의 사회적 보편화를 위하여 노력합니다.
        </S.Text>
      </MainCard>

      <MainCard img={card2}>
        <S.HeaderText>S (Social)</S.HeaderText>
        <S.Text>
          소비자가 기업의 ESG경향을 파악, 분석하고 맞춤 소비를 할 수 있게
          돕습니다. 습득-학습-공유의 3단계로 가치를 창출하려 합니다.
        </S.Text>
      </MainCard>

      <MainCard position="left" img={card3}>
        <S.HeaderText>G (Goverment)</S.HeaderText>
        <S.Text>
          우리 서비스는 어려운 ESG개념을 보편화하기위하여 출발하였습니다. ESG가
          어렵기보다는 이제 친숙한 ESG의 사회적 보편화를 위하여 노력합니다.
        </S.Text>
      </MainCard>
    </>
  );
}

export default MainPage;
