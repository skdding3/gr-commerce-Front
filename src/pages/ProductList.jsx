import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("신상품순");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value, // color : red
    });
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Clothes</Title>
      <FilterContainer>
        <Filter>
          <FilterText>필터</FilterText>
          {/* 선택한 value와 text 값으로 변경해주는 동적코드 */}
          <Select name="color" onChange={handleFilters}>
            <Option disabled>색상</Option>
            <Option>흰색</Option>
            <Option>검은색</Option>
            <Option>파란색</Option>
            <Option>빨간색</Option>
            <Option>노랑색</Option>
            <Option>초록색</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>사이즈</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>정렬</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value={"newest"}>신상품순</Option>
            <Option value={"ase"}>가격 높은 순</Option>
            <Option value={"desc"}>가격 낮은 순</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
