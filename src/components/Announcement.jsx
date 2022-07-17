import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

function Announcement() {
  return (
    <Container>
      특별 할인 행사 최대 50% 할인! 5만원 이상 구매시 무료배송!
    </Container>
  );
}

export default Announcement;
