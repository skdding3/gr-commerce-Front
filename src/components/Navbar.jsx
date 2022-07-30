import React from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ display: "none" })}
`;

// 컨테이너 위치 구성

const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

// 왼쪽 컨테이너
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
  ${mobile({ display: "none" })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

// 센터 컨테이너

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bolder;
  ${mobile({ fontSize: "24px" })}
`;

// 오른쪽 컨테이너
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px; // 간격 수정
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        {/* 왼쪽 컨테이너 */}
        <Left>
          <Language>KR</Language>
          <SearchContainer>
            <Input placeholder="상품 검색" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        {/* 센터 컨테이너 */}
        <Center>
          <Logo>GR.</Logo>
        </Center>
        {/* 오른쪽 컨테이너 */}
        <Right>
          <MenuItem>회원가입</MenuItem>
          <MenuItem>로그인</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
