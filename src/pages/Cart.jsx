import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.h1``;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
const ProductAmount = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: black;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
`;

function Cart() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>장바구니</Title>
        <Top>
          <TopButton>쇼핑 계속하기</TopButton>
          <TopTexts>
            <TopText>장바구니 (2)</TopText>
            <TopText>찜목록 (0)</TopText>
          </TopTexts>
          <TopButton type="filled">바로 결제하기</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DM0573-002/59301e36-89ab-4d96-b611-02990e50067e_primary.jpg?zoom" />
                <Details>
                  <ProductName>
                    <b>Product:</b> 나이키 에어포스 1 리액트
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 123
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>SIZE:</b> 270
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>₩ 20000</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DM0573-002/59301e36-89ab-4d96-b611-02990e50067e_primary.jpg?zoom" />
                <Details>
                  <ProductName>
                    <b>Product:</b> 나이키 에어포스 1 리액트
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 123
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>SIZE:</b> 270
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>₩ 20000</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
