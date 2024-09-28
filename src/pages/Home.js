import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Main from "../components/Main";
import ItemFrame3 from "../components/ItemFrame3";

// 애니메이션 키프레임 정의
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Frame1 = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px;
`;

const Frame2 = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px;
`;

const Frame3 = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
  border: solid 1px;
`;

// 애니메이션을 적용할 styled-component
const AnimatedItemFrame3 = styled(ItemFrame3)`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeIn} 0.5s forwards;
    `}
`;

const HomeContent = () => {
  const frame3Ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerCallback = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    const observerOptions = {
      root: null,
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (frame3Ref.current) {
      observer.observe(frame3Ref.current);
    }

    return () => {
      if (frame3Ref.current) {
        observer.unobserve(frame3Ref.current);
      }
    };
  }, []);

  return (
    <Container>
      <Frame1>첫 번째 프레임</Frame1>
      <Frame2>두 번째 프레임</Frame2>
      <Frame3 ref={frame3Ref}>
        <AnimatedItemFrame3 isVisible={isVisible} />
      </Frame3>
    </Container>
  );
};


const Home = () => {
  return <Main props={<HomeContent />} />;
};

export default Home;
