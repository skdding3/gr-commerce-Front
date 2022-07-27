import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.h1``;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
`;
const Bottom = styled.div``;

function Cart() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>장바구니</Title>
        <Top>
          <TopButton>쇼핑 계속하기</TopButton>
          <TopButton>바로 결제하기</TopButton>
        </Top>
        <Bottom></Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
