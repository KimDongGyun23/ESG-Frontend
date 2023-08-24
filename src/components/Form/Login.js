import { Container, Form } from "react-bootstrap";
import BtnLogin from "../Buttons/BtnLogin";
import { BoxStyle, InputStyle } from "./FormStyle";
import { Link, useNavigate } from 'react-router-dom';
import Validation from "./LoginValidation";
import axios from "axios";
import { useEffect, useState } from "react";


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

    if (!validationErrors.email && !validationErrors.password) {
        try {
            const res = await axios.post('http://localhost:8081/login', values);
            console.log('Got:', res.data);
            if (res.data === "Success") {
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
