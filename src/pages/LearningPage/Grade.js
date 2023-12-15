import * as S from "../../styles/LearningPage/Concept.style";
import GradeImage from "../../assets/images/grade.JPG"; // 이미지 경로에 실제 이미지 파일 경로로 변경
import { Link } from "react-router-dom";

function Concept() {
  return (
    <>
      <S.Container>
        <S.Title>ESG등급 체계</S.Title>
        <S.CardList>
          <Link to="https://esg.krx.co.kr/contents/02/02020000/ESG02020000.jsp">
            기업 평가기준 보러 가기
          </Link>
          <img src={GradeImage} alt="Grade" /> {/* 이미지 추가 */}
        </S.CardList>
      </S.Container>
    </>
  );
}

export default Concept;
