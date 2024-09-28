import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px;
`;

const Frame = styled.div`
  width: 90%;
  height: 100%;
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <Container>
      <Frame>푸터입니다.</Frame>
    </Container>
  );
};

export default Footer;
