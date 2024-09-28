import React from "react";
import styled, { keyframes, css } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ImageFrame = styled.div`
  width: 100%;
  height: 600px;
`;

const Image = styled.div`
  background-image: url("/images/test3.png");
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

// 텍스트 애니메이션 키프레임 정의
const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// 텍스트 스타일 정의 (css 헬퍼 사용)
const Text = styled.div`
  font-size: 120px;
  font-weight: bold;
  color: white;
  position: absolute;
  top: 20%;
  transform: translateY(-50%);
  margin: 20px 20px;
  ${({ side }) => (side === "left" ? "left: 0;" : "right: 0;")}

  ${({ side }) =>
    side === "left"
      ? css`
          animation: ${slideInFromLeft} 1s forwards;
        `
      : css`
          animation: ${slideInFromRight} 1s forwards;
        `}
`;

const ItemFrame3 = ({ isVisible }) => {
  return (
    <Container>
      <ImageFrame>
        <Image />
        {isVisible && (
          <>
            <Text side="left">Virtual</Text>
            <Text side="right">leaf</Text>
          </>
        )}
      </ImageFrame>
    </Container>
  );
};

export default ItemFrame3;
