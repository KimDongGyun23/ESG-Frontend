import { Form } from "react-bootstrap";
import * as S from "../../styles/Form/Form.style";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Validation from "./SignInValidation"; // input 검사 함수
import axios from "axios";
const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

// 회원가입 선택 시
function SignUp(props) {
  //////////////////////////////////////////////
  /*          axios 통신 테스트 부분          */

  const [values, setValues] = useState({
    email: "",
    name: "",
    birth: "",
    nickname: "",
    password1: "",
    password2: "",
    like: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const { name, value } = event.target;
    console.log("Input changed:", name, value);
    setValues((prev) => ({ ...prev, [name]: value }));
    //setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    // password2 확인 로직
    if (values.password1 !== values.password2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password2: "비밀번호가 일치하지 않습니다",
      }));
      alert("비밀번호가 일치하지 않습니다");
      return;
    }

    console.log("Errors after validation:", errors);

    // 서버로 데이터 전송
    const dataToSend = {
      email: values.email,
      name: values.name,
      birth: values.birth,
      nickname: values.nickname,
      password: values.password1, // password1로 변경
      interest: values.like,
    };

    console.log("입력값 출력", dataToSend);

    axios
      .post(`${PROXY}/join/user`, dataToSend)
      .then((res) => {
        console.log("데이터 서버 전송 성공", res.data);
        navigate("/");
      })
      .catch((err) => console.log("데이터 서버 전송 실패", err));
  };

  /**
   * < SignIn >
   * Form.Group ( 이메일, 이름, 비밀번호, 비밀번호 확인 )
   */
  return (
    <S.FormContainer>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>이메일 주소</Form.Label>
          <S.InputBox>
            <S.Input
              type="email"
              placeholder="Enter your Email Address"
              name="email"
              onChange={handleInput}
            />
          </S.InputBox>
        </Form.Group>

        <Form.Group controlId="formUserName">
          <Form.Label>사용자 이름</Form.Label>
          <S.InputBox>
            <S.Input
              type="text"
              placeholder="Enter your User Name"
              name="name"
              onChange={handleInput}
            />
          </S.InputBox>
        </Form.Group>

        <Form.Group controlId="formBirth">
          <Form.Label>생년월일</Form.Label>
          <S.InputBox>
            <S.Input
              type="text"
              placeholder="Enter your Birth"
              name="birth"
              onChange={handleInput}
            />
          </S.InputBox>
        </Form.Group>

        <Form.Group controlId="formNickname">
          <Form.Label>닉네임</Form.Label>
          <S.InputBox>
            <S.Input
              type="text"
              placeholder="Enter your Nickname"
              name="nickname"
              onChange={handleInput}
            />
          </S.InputBox>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>비밀번호</Form.Label>
          <S.InputBox>
            <S.Input
              type="password"
              placeholder="Enter your Password"
              name="password1"
              onChange={handleInput}
            />
            <i className="fa-solid fa-eye-slash"></i>
          </S.InputBox>
        </Form.Group>

        <Form.Group controlId="formPasswordCheck">
          <Form.Label>비밀번호 확인</Form.Label>
          <S.InputBox>
            <S.Input
              type="password"
              placeholder="Enter your Password"
              name="password2"
              onChange={handleInput}
            />
            <i className="fa-solid fa-eye-slash"></i>
          </S.InputBox>
        </Form.Group>

        <Form.Group controlId="formLike">
          <Form.Label>관심사 </Form.Label>
          <Form.Control as="select" name="like" onChange={handleInput}>
            <option value="E">환경 (E)</option>
            <option value="S">사회 (S)</option>
            <option value="G">지배구조 (G)</option>
          </Form.Control>
        </Form.Group>

        <S.BtnLogin type="submit">가입하기</S.BtnLogin>
      </Form>
    </S.FormContainer>
  );
}

export default SignUp;
