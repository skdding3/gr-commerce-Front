import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
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
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
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
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: black;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px soild lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 500;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
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
                <ProductPrice>₩ 10000</ProductPrice>
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
          <Summary>
            <SummaryTitle>주문 내역</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>주문 총계</SummaryItemText>
              <SummaryItemPrice>₩ 40000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>배송료</SummaryItemText>
              <SummaryItemPrice>₩ 4000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>배송 할인</SummaryItemText>
              <SummaryItemPrice>₩ -4000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>결제할 금액</SummaryItemText>
              <SummaryItemPrice>₩ 40000</SummaryItemPrice>
            </SummaryItem>
            <Button>결제 하기</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
