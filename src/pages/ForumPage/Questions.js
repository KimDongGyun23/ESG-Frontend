import * as S from "../../styles/ForumPage/Questions.style"
import profileImg from "../../assets/forum-profile.png"

function Questions(){

  let dummy = [
    {name : "Golanginya", date : "2023/08/18 11:00", title : "ESG의 E,S,G는 각각 무슨 단어를 뜻하는 건가요?", description : "ESG의 E,S,G가 무슨 뜻인지 궁금해요 처음 접하는 단어라 잘 모르겠어서 글 남깁니다."},
    {name : "Nikcname", date : "2023/08/18 10:47", title : "ESG 경영의 장기적 목표는 무엇인가요?", description : "장기적으로 어떠한 점을 기업을이 추구해서 ESG 경영을 하려는지 궁금합니다."},
    {name : "AizhanMaratovna", date : "2023/08/17 10:47", title : "팬데믹으로 인한 배경", description : "팬데믹이 ESG를 몰고 왔다고 하는데 발생 배경이 궁금합니다. 순차적으로 설명해주실 분 계신가요?"},
    {name : "Lola", date : "2023/08/18 10:47", title : "미닝아웃의 뜻이 무엇인가요?", description : "미닝아웃 미닝아웃 하던데 ESG 관련 이 단어의 뜻이 무엇인지 알려주세요!"}
  ];



  return(
    <>
      <div className="text-start">


        {
          dummy.map( (element, index)=> (
            <S.Card key={index}>
              <S.Profile>
                <img src={profileImg} alt="img"/>
                <div>
                  <p className="name">{element.name}</p>
                  <p className="date">{element.date}</p>
                </div>
              </S.Profile>
              <S.Text>
                <h3>{element.title}</h3>
                <p>{element.description}</p>
              </S.Text>
              <S.Footer>
                <div>tag</div>
                <div>number</div>
              </S.Footer>
            </S.Card>
          ))
        }

        



      </div>
    </>
  )
};

export default Questions;

