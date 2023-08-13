import { Container } from "react-bootstrap";
import { styled } from "styled-components";
import MainBg from "../components/MainBg.js";
import profile from '../assets/profile.png';

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

// 프로필  Box 
const Profile = styled(Container)`
display : grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
text-align : center;
`;

// 프로필 이미지
const ProfileImg = styled.img`
  padding : 10px;
  box-sizing : border-box;
  width : 100%;
  height : 450px;
  border-radius : 20px;
  `;

// 프로필 이름
const Name = styled.p`
  font-size : 30px;
  margin-bottom : 10px;
`;

// 프로필 도시
const City = styled.p`
  font-size : 20px;
  margin-bottom : 30px;
`;

/**
 * < TeamPage >
 * grid를 1 : 1 : 1 : 1 로 설정하여 개인 프로필 노출
 * map을 통해 프로필 데이터에 접근하여 순차적 출력
 */
function TeamPage(){
  return(
    <>
      <MainBg title="Our Team" subtitle="Home / Team"/>

      <Profile>
        {
          teamId.map((i, j)=>{
            return(
              <div key={j}>
                <ProfileImg src={profile}/>
                <Name>{teamId[j].name}</Name>
                <City>{teamId[j].city}</City>
                <i className="fa-brands fa-facebook-f me-4" />
                <i className="fa-brands fa-twitter mb-5" />
              </div>
          )})
        }
      </Profile>
    </>
  )
};

export default TeamPage;