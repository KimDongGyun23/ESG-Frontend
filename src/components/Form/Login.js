import { Form } from "react-bootstrap";
import * as S from "../../styles/Form/Form.style";

import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Validation from "./LoginValidation";


// 로그인 버튼 선택 시
function Login(){

  const [values, setValues] = useState({
    email: '',
    password: ''
  });


  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
  const { name, value } = event.target;
  console.log('Input changed:', name, value);
  setValues((prev) => ({ ...prev, [name]: value }));
};

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    console.log('Entered:', values);

    // 이메일과 비밀번호 입력 조건 만족 시, 로그인 진행
    if (!validationErrors.email && !validationErrors.password) {
        try {
            const res = await axios.post('http://localhost:8081/login', values);
            console.log('Got:', res.data);
            if (res.data === "Success") { // backend에서 보낸 Success 확인
                navigate('/');
            } else {
                alert("No record existed");
            }
        } catch (err) {
            console.log(err);
        }
    }
  }

/**
 * < Login >
 * Form.Group ( 이메일, 비밀번호 )
 * axios를 통한 통신 ( 차후 수정 )
 */
  return(
    <S.FormContainer>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>이메일 주소</Form.Label>
          <S.InputBox>
            <S.Input 
              type="email" 
              placeholder="Enter your Email Address" 
              name='email' 
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
              name='password' 
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
  )
};

export default Login; 
