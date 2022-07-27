import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40;
  margin: 30px 50px 10px 0px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid;
`;
const Button = styled.button`
  margin: 30px;
  padding: 15px;
  border: 2px solid;
  background-color: white;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`;

function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>계정 로그인</Title>
        <Form>
          <Input placeholder="이메일" />
          <Input placeholder="비밀번호" />
          <Button>로그인</Button>
          <Link>비밀번호를 잊어버리셨나요? ㅋㅋ</Link>
          <Link>설마 계정도 없으세요? ㅎㅎ</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
