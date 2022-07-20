import { Instagram, Facebook, Twitter } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3``;

const List = styled.ul``;

const ListItem = styled.li``;

const Right = styled.div`
  flex: 1;
  padding: 20px;
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
          <ListItem>카테고리</ListItem>
          <ListItem>Shoes</ListItem>
          <ListItem>Clothes</ListItem>
        </List>
      </Center>
      <Right></Right>
    </Container>
  );
}

export default Footer;
