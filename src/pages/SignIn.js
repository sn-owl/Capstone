import React from "react";
import styled from "styled-components";
import Main from "../components/Main";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Frame = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px;
`;

const SignInContent = () => {
  return (
    <Container>
      <Frame>로그인 페이지입니다.</Frame>
    </Container>
  );
};

const SignIn = () => {
  return <Main props={<SignInContent />} />;
};

export default SignIn;
