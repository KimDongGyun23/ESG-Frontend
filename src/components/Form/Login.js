import axios from "axios";
import { Container, Form } from "react-bootstrap";
import { BoxStyle, InputStyle } from "./FormStyle";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import BtnLogin from "../Buttons/BtnLogin";
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
    <Container className="my-5 py-5" style={{maxWidth : "600px"}}>
      <Form className="d-flex-column" onSubmit={handleSubmit}>
        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Label>이메일 주소</Form.Label>
          <BoxStyle>
            <InputStyle type="email" placeholder="Enter your Email Address" name='email' onChange={handleInput} />
          </BoxStyle>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Label>비밀번호</Form.Label>
          <BoxStyle>
            <InputStyle type="password" placeholder="Enter Your Password" name='password' onChange={handleInput}/>
          </BoxStyle>
        </Form.Group>

        <BtnLogin type="submit" className="float-clear">
          로그인
        </BtnLogin>
      </Form>
    </Container>
  )
};

export default Login; 
