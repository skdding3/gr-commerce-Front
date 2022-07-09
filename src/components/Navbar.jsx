import React from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";

const Container = styled.div`
  height: 60px;
`;

// 컨테이너 위치 구성

const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
`;

// 왼쪽 컴포넌트
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid;
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 5px;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Input = styled.input``;

// 센터 컴포넌트

const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>KR</Language>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
