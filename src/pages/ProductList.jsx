import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  margin-right: 20px;
  font-size: 20px;
  font-weight: 600;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

function ProductList() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Clothes</Title>
      <FilterContainer>
        <Filter>
          <FilterText>필터</FilterText>
          <Select>
            <Option disabled selected>
              색상
            </Option>
            <Option>흰색</Option>
            <Option>검은색</Option>
            <Option>파란색</Option>
            <Option>빨간색</Option>
            <Option>노랑색</Option>
            <Option>초록색</Option>
          </Select>
          <Select>
            <Option disabled selected>
              사이즈
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>정렬</FilterText>
          <Select>
            <Option selected>신상품순</Option>
            <Option>가격 높은 순</Option>
            <Option>가격 낮은 순</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
