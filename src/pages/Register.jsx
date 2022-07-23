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
  margin: 20px 50px 10px 0px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid;
`;

const Agreement = styled.span``;
const Button = styled.button`
  margin: 50px;
  padding: 15px;
  border: 2px solid;
  background-color: white;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background-color: #f8f4f4;
  }
`;

function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>회원 가입</Title>
        <Form>
          <Input placeholder="이름" />
          <Input placeholder="이메일" />
          <Input placeholder="닉네임" />
          <Input placeholder="비밀번호" />
          <Input placeholder="비밀번호 확인" />
          <Agreement>동의 사항 블라블라</Agreement>
          <Button>계정 생성</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
