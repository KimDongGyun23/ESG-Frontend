import React from "react";
import * as S from "../../styles/ForumPage/ForumRegister-style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const ID = localStorage.getItem("userID");
  const navigate = useNavigate();

  // state와 state를 변경하는 함수 선언
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  // Category state
  const [category, setCategory] = useState("");
  // 작성하기 state
  const [isActive, setIsActive] = useState(false);

  // error state
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  // 카테고리 에러 처리 기능 추가해야함
  const [categoryError, setCategoryError] = useState("");

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    // 입력한 값으로 바로 검사
    if (event.target.value && contents && category) {
      setIsActive(true);
    }
    if (event.target.value !== "") {
      setTitleError("");
    }
  };

  // 이벤트 핸들러 함수
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (title && event.target.value && category) {
      setIsActive(true);
    }
    if (event.target.value !== "") {
      setContentsError("");
    }
  };

  const onChangeCategory = (event) => {
    setCategory(event.target.value);
    if (title && event.target.value && contents) {
      setIsActive(true);
    }
    if (event.target.value !== "") {
      setCategoryError("");
    }
  };

  const onClickSubmit = async () => {
    // 타이틀이 비었을 때 (없을 때)
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    if (!category) {
      setCategoryError("카테고리를 선택해주세요.");
    }
    if (title && contents && category) {
      try {
        const postData = {
          tags: Array.isArray(category) ? category : [category],
          title: title,
          detail: contents,
        };
        console.log(postData);
        console.log("userID출력: ", postData.ID);
        console.log("제목 출력: ", postData.title);
        console.log("내용출력: ", postData.detail);
        console.log("선택한 카테고리 출력: ", postData.tags);
        await axios.post(`/forum/publish/${ID}`, postData);
        console.log(postData);
        alert("게시글이 성공적으로 등록되었습니다.");
        navigate("/api/forum/questions");
      } catch (error) {
        console.log("등록 에러 발생-------------------------");
        console.error(error);
      }
    }
  };

  return (
    <S.Wrapper>
      <S.Title>게시글 등록</S.Title>
      <S.Select value={category} onChange={onChangeCategory}>
        <option value="">카테고리 선택 (E, S, G, 기타 선택)</option>
        <option value="E">E</option>
        <option value="S">S</option>
        <option value="G">G</option>
        <option value="기타">기타</option>
      </S.Select>
      <S.Error>{categoryError}</S.Error>
      <S.Label>제목</S.Label>
      <S.Subject
        type="text"
        placeholder="제목을 입력하세요"
        onChange={onChangeTitle}
      />
      <S.Error>{titleError}</S.Error>
      <S.Label>내용</S.Label>
      <S.Contents
        placeholder="질문 혹은 나누고 싶은 게시글 내용을 입력하세요"
        onChange={onChangeContents}
      />
      <S.Error>{contentsError}</S.Error>
      <S.SubmitButton onClick={onClickSubmit} isActive={isActive}>
        🖋 작성하기
      </S.SubmitButton>
    </S.Wrapper>
  );
}

export default Register;
