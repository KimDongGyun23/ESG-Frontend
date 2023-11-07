import React from "react";
import * as S from "../../styles/ForumPage/ForumRegister-style";
import { useState } from "react";
import axios from "axios";

function ForumRegister() {
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
          userID: 0,
          title: title,
          detail: contents,
          tags: category,
        };
        const id = 12;
        console.log("제목 출력: ", postData.title);
        console.log("내용출력: ", postData.detail);
        console.log("선택한 카테고리 출력: ", postData.tags);
        await axios.post("https://koreanjson.com/todos", postData);
        alert("게시글이 성공적으로 등록되었습니다.");
        //router.push('/forum/forum-list')
      } catch (error) {
        console.log("등록 에러 발생-------------------------");
        console.error(error);
      }
    }
  };

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.Title>게시글 등록</S.Title>
        <select
          value={category}
          onChange={onChangeCategory}
          style={{
            width: "920px",
            color: "rgba(128, 128, 128, 1)",
            height: "40px",
            paddingLeft: "16px",
            borderRadius: "5px",
            border: "2px solid rgba(234, 234, 234, 1)",
          }}
        >
          <option value="">카테고리 선택 (E, S, G, 기타 선택)</option>
          <option value="E">E</option>
          <option value="S">S</option>
          <option value="G">G</option>
          <option value="기타">기타</option>
        </select>
        <S.Error>{categoryError}</S.Error>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject
          type="text"
          placeholder="제목을 입력하세요"
          onChange={onChangeTitle}
        />
        <S.Error>{titleError}</S.Error>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents
          placeholder="질문 혹은 나누고 싶은 게시글 내용을 입력하세요"
          onChange={onChangeContents}
        />
        <S.Error>{contentsError}</S.Error>
      </S.InputWrapper>

      <S.ButtonWrapper>
        <S.SubmitButton onClick={onClickSubmit} isActive={isActive}>
          🖋 작성하기
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

export default ForumRegister;
