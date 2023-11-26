import * as S from "../../styles/ForumPage/Questions.style";
import profileImg from "../../assets/images/forum-profile.png";
import Subnav from "./Subnav";
import { Link } from "react-router-dom";

function Questions() {
  let dummy = [
    {
      id: 0,
      name: "Golanginya",
      date: "2023/08/18 11:00",
      title: "ESG의 E,S,G는 각각 무슨 단어를 뜻하는 건가요?",
      description:
        "ESG의 E,S,G가 무슨 뜻인지 궁금해요 처음 접하는 단어라 잘 모르겠어서 글 남깁니다.",
      tag: ["ESG", "단어"],
      number: ["12", "23", "12"],
    },
    {
      id: 1,
      name: "Nikcname",
      date: "2023/08/18 10:47",
      title: "ESG 경영의 장기적 목표는 무엇인가요?",
      description:
        "장기적으로 어떠한 점을 기업을이 추구해서 ESG 경영을 하려는지 궁금합니다.",
      tag: ["목표", "ESG 경영", "장기적"],
      number: ["235", "246", "543"],
    },
    {
      id: 2,
      name: "AizhanMaratovna",
      date: "2023/08/17 10:47",
      title: "팬데믹으로 인한 배경",
      description:
        "팬데믹이 ESG를 몰고 왔다고 하는데 발생 배경이 궁금합니다. 순차적으로 설명해주실 분 계신가요?",
      tag: ["팬데믹", "발생 배경", "순차적 흐름"],
      number: ["345", "335", "344"],
    },
    {
      id: 3,
      name: "Lola",
      date: "2023/08/18 10:47",
      title: "미닝아웃의 뜻이 무엇인가요?",
      description:
        "미닝아웃 미닝아웃 하던데 ESG 관련 이 단어의 뜻이 무엇인지 알려주세요!",
      tag: ["ESG", "미닝아웃"],
      number: ["604", "674", "724"],
    },
  ];

  // 데이터를 순회하며 카드 박스 내부에 각각의 데이터 삽입
  return (
    <S.Container>
      <Subnav />
      {dummy.map((element, index) => (
        <S.Card key={index}>
          <S.Profile>
            <S.Img src={profileImg} alt="profile-img" />
            <div>
              <p>{element.name}</p>
              <p className="date">{element.date}</p>
            </div>
            <S.Kebab className="fa-solid fa-ellipsis-vertical" />
          </S.Profile>

          <S.Text>
            <h3>{element.title}</h3>
            <p>{element.description}</p>
          </S.Text>

          <S.CardFooter>
            <div className="d-flex">
              {element.tag.map((i, j) => (
                <S.Tag key={j}>{i}</S.Tag>
              ))}
            </div>

            <div className="d-flex">
              <S.Like>
                <i className="fa-regular fa-heart" /> {element.number[0]}
              </S.Like>
              <S.Like>
                <i className="fa-regular fa-eye" /> {element.number[1]}
              </S.Like>
              <S.Like>
                <i className="fa-regular fa-message" /> {element.number[2]}
              </S.Like>
            </div>
          </S.CardFooter>
        </S.Card>
      ))}
      <S.BtnWrite as={Link} to="/forum/ForumRegister">
        글쓰기
      </S.BtnWrite>
    </S.Container>
  );
}

export default Questions;
