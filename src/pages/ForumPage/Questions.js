import * as S from "../../styles/ForumPage/Questions.style";
import profileImg from "../../assets/images/forum-profile.png";
import Pagination from "../../components/Buttons/Pagination";
import Subnav from "./Subnav";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Questions() {
  const [boardList, setBoardList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const articlesPerPage = 5;

  // 페이지 이동 함수
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredArticles = boardList.filter((boardList) => {
    const title = boardList.title ? boardList.title.toLowerCase() : "";
    const content = boardList.content ? boardList.content.toLowerCase() : "";
    const lowerCaseSearchKeyword = searchKeyword.toLowerCase();
    return (
      title.includes(lowerCaseSearchKeyword) ||
      content.includes(lowerCaseSearchKeyword)
    );
  });
  const filteredCurrentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://koreanjson.com/posts");
        const _inputData = res.data.map((rowData) => ({
          id: rowData.id,
          title: rowData.title,
          content: rowData.content,
          date: rowData.createdAt,
          // 추가 정보 삽입
        }));
        setBoardList(_inputData);
        console.log("게시글 목록 받아오기 성공");
        console.log(
          "받아온 첫번째 boardList 출력 :: ",
          res.data[0],
          res.data[1]
        );
      } catch (e) {
        console.error(e.message);
      }
    };

    fetchData();
  }, []);
  // 데이터를 순회하며 카드 박스 내부에 각각의 데이터 삽입
  return (
    <>
      <Subnav />
      <S.Container>
        {filteredCurrentArticles.map((element) => (
          <S.Card key={element.id}>
            <S.Profile>
              <S.Img src={profileImg} alt="profile-img" />
              <div>
                <p>{element.id}</p>
                <p className="date">{element.date}</p>
              </div>
              <S.Kebab className="fa-solid fa-ellipsis-vertical" />
            </S.Profile>

            <S.Text>
              <h3>{element.title}</h3>
              <p>{element.content}</p>
            </S.Text>
          </S.Card>
        ))}
      </S.Container>
      <S.pageWrapper>
        <S.BtnWrite as={Link} to="/forum/register">
          글쓰기
        </S.BtnWrite>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredArticles.length / articlesPerPage)}
          onPageChange={handlePageChange}
        />
      </S.pageWrapper>
    </>
  );
}

export default Questions;
