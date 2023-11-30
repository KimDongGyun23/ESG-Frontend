import { Form } from "react-bootstrap";
import * as S from "../../styles/Form/Form.style";
import { setCookie } from "../../context/cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Validation from "./LoginValidation";
import { useAuth } from "../../context/AuthContext";

// 로그인 버튼 선택 시
function Login() {
  const { login } = useAuth();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const { name, value } = event.target;
    console.log("Input changed:", name, value);
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    // 서버로 데이터 전송
    const dataToSend = {
      email: values.email,
      password: values.password,
    };

    console.log("입력값 출력", dataToSend);

    // 이메일과 비밀번호 입력 조건 만족 시, 로그인 진행
    if (!validationErrors.email && !validationErrors.password) {
      axios
        .post("/login", dataToSend)
        .then((res) => {
          console.log(res.data.message); // 백엔드에서 보내는 로그인 성공
          console.log("백엔드에서 보낸 access token: " + res.data.access_token);
          console.log(res.data);
          const accessToken = res.data.access_token;
          setCookie("access-token", `${accessToken}`, {
            path: "/",
            sameSite: "strict",
          });

          localStorage.setItem("nickname", res.data.NickName);
          localStorage.setItem("access-token", res.data.access_token);
          localStorage.setItem("interest", res.data.interest);

          login();
          navigate("/");
          alert("로그인 되었습니다!");
        })
        .catch((err) => {
          if (err.response && err.response.status === 401) {
            console.log("비밀번호가 틀렸습니다.");
          } else {
            console.log("로그인 실패 에러: ", err);
          }
        });
    }
  };

  /**
   * < Login >
   * Form.Group ( 이메일, 비밀번호 )
   */
  return (
    <S.FormContainer>
      <Form onSubmit={handleSubmit} method="POST" action="/login">
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

        <Form.Group controlId="formPassword">
          <Form.Label>비밀번호</Form.Label>
          <S.InputBox>
            <S.Input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              onChange={handleInput}
            />
            <i className="fa-solid fa-eye-slash"></i>
          </S.InputBox>
        </Form.Group>

        <S.LoginHelper>
          <Form.Check
            // type=""
            // id=""
            label="계정 기억하기"
          />
          <a href="*">비밀번호를 잊으셨나요?</a>
        </S.LoginHelper>

        <S.BtnLogin type="submit">로그인</S.BtnLogin>
      </Form>
    </S.FormContainer>
  );
}

export default Login;
