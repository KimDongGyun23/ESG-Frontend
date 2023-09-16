import * as S from "../../styles/IntroducePage/IntroducePage.style"
import Banner from "../../components/Layouts/Banner";
import profile from '../../assets/profile.png';

// 개인 프로필 정보 임시 데이터
let teamId = [
  {name : "Kim", city : "Seoul, South Korea"},
  {name : "Hong", city : "Incheon, South Korea"},
  {name : "Ahn", city : "Busan, South Korea"},
  {name : "Lee", city : "Kimpo, South Korea"},
  {name : "Hwang", city : "Daejeon, South Korea"},
  {name : "Seo", city : "Jeonju, South Korea"},
  {name : "Lim", city : "Daegu, South Korea"},
  {name : "Ji", city : "Gochang, South Korea"}
];

/**
 * < TeamPage >
 * map을 통해 프로필 데이터에 접근하여 순차적 출력
 */
function IntroducePage(){
  return(
    <>
      <Banner title="Our Team" subtitle="Home / Team"/>
      <S.Profile>
        {
          teamId.map((i, j)=>{
            return(
              <div key={j}>
                <S.ProfileImg src={profile}/>
                <S.Name>{teamId[j].name}</S.Name>
                <S.City>{teamId[j].city}</S.City>
                <i className="fa-brands fa-facebook-f me-4" />
                <i className="fa-brands fa-twitter mb-5" />
              </div>
          )})
        }
      </S.Profile>
    </>
  )
};

export default IntroducePage;