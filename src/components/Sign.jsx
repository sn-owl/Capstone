import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh; /* 디스플레이의 높이만큼 */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem; /* flex 항목 간의 간격 */
  flex-direction: column;
`;

export const Frame1 = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 0%;
  width: 500px;
  max-width: fit-content;
`;

export const Frame2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 456px;
  gap: 20px; /* flex 항목 간의 간격 */
`;

export const Frame3Top = styled.div`
  width: 400px;
  height: 456px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem; /* flex 항목 간의 간격 */
`;

export const InputBox = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
`;

export const InputWrapper = styled.div`
  position: relative; /* 상대 위치 */
  width: 100%;
`;

export const Input = styled.input`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  position: relative;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 12px;
  font-size: 1rem; /* 텍스트 크기 */
  border: 2px solid gray;
  width: 100%;
  padding: 10px;
  padding-right: 40px; /* 아이콘 공간 확보 */
  box-sizing: border-box;
`;

export const Button = styled.button`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  position: relative;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #63b26d;
  --tw-text-opacity: 1;
  color: rgb(255 255 255);
  border-radius: 12px;
  border: none;
  font-size: 1.1rem; /* 텍스트 크기 */
  font-weight: 900; /* 텍스트 굵기 증가 */
  cursor: pointer; /* 커서를 손가락 모양으로 변경 */
`;
export const H2Sign = styled.h2`
  width: 100%;
  font-size: 3rem;
  font-weight: 4000;
  text-align: center;
  line-height: normal;
  --tw-text-opacity: 1;
  color: rgba(61, 81, 92, var(--tw-text-opacity));
  font-family: "__pretendard_5ef0c5", "__pretendard_Fallback_5ef0c5", sans-serif;
`;

export const P3Text = styled.p`
  width: 100%;
  text-align: center;
  font-weight: 4000;
  font-size: 1rem;
  line-height: 1.25rem;
  word-break: keep-all;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
  color: gray;
`;

export const P3Text2 = styled.p`
  width: 100%;
  text-align: right;
  text-decoration: underline; /* 밑줄 추가 */
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  word-break: keep-all;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  cursor: pointer; /* 커서를 손가락 모양으로 변경 */
`;

export const P3Text3 = styled.p`
  width: 100%;
  text-align: left;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  word-break: keep-all;
  color: red;
`;

export const P3Text4 = styled.p`
  position: absolute; /* 절대 위치 */
  top: 50%; /* 상단에서 50% */
  right: 10px; /* 우측에서 10px */
  transform: translateY(-50%); /* 수직 중앙 정렬 */
  z-index: 10; /* z-index 설정 */
  text-align: right;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  word-break: keep-all;
  cursor: pointer; /* 커서를 손가락 모양으로 변경 */
  color: rgba(61, 81, 92, var(--tw-text-opacity));
`;

export const HomePageDiv = styled.div`
  display: flex;
  justify-content: left; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  img {
    width: 20vw; /* 화면 너비의 20%로 설정 */
    height: auto; /* 비율을 유지하면서 높이를 자동으로 설정 */
    max-width: 200px; /* 최대 너비 200px */
  }
  width: 100%;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  padding-top: 0.7rem;
  padding-bottom: 1rem;
  padding-left: 0.7rem;
  padding-right: 5rem;
  gap: 0.5rem;
  border-radius: 12px;
  background-color: ${(props) => props.bgcolor || "#63b26d"};
  border: ${(props) => (props.border ? props.border : "none")};
  cursor: pointer; /* 커서를 손가락 모양으로 변경 */
`;

export const HomePageButton = () => {
  const navigate = useNavigate();

  const HomePageOnClick = () => {
    navigate("/");
  };
  return (
    <HomePageDiv onClick={HomePageOnClick} bgcolor={"none"} border={"none"}>
      <img src={"images/logo.png"} alt="logo" />
    </HomePageDiv>
  );
};
