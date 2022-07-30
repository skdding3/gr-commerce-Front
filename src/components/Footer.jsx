import {
  Instagram,
  Facebook,
  Twitter,
  Room,
  PhoneIphone,
  Email,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
`;

// 로고 및 정보

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;

// 아이콘 컨테이너

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  // 아이콘 별 색상 적용 (props)
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ height: "50px" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

// 항목 보기

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>GR.</Logo>
        <Desc>(주)극락 | 사업자번호 : 2022-07-01</Desc>
        <SocialContainer>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>항목 보기</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Shoes</ListItem>
          <ListItem>Clothes</ListItem>
          <ListItem>Accessory</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>찜 리스트</ListItem>
          <ListItem>배송 조회</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          서울시 극락구 극락동
        </ContactItem>
        <ContactItem>
          <PhoneIphone style={{ marginRight: "10px" }} />
          +82 10 7502 5680
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} />
          skdding3@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}

export default Footer;
