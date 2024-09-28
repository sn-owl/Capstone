import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px;
  position: fixed;
  background-color: white;
`;

const Frame = styled.div`
  width: 90%;
  height: 100%;
  border: solid 1px;
  display: flex;
  align-items: center;
`;

const HeaderFrame = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    position: relative;
    border: solid 1px;
`

const Logo = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    border: solid 1px;
    img {
        width: 100%;
        height: 80%;
    }
`

const Menu = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: solid 1px;
    margin-left: 100px;
`

const MenuList = styled.li`
    display: flex;
    margin-right: 38px;
    font-size: 21px;
    font-weight: bold;
    list-style-type: none;
    color: gray;
    cursor: pointer;
    border: solid 1px;
`

const SignBtn = styled.button`
    width: 150px;
    height: 100%;
    border: none;
    border-radius: 3px;
    color: white;
    background-color: #63b26d;
    cursor: pointer;
    font-weight: bold;
    font-size: 17px;
    position: absolute;
    right: 160px;
`

const MypageBtn = styled.button`
    width: 150px;
    height: 100%;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: white;
    font-weight: bold;
    font-size: 17px;
    position: absolute;
    right: 0;
`

const Header = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/signin");
    }

    const handleMypageClick = () => {
        navigate("/mypage");
    }

    const handlePlantsClick = () => {
        navigate("/plants");
    }



  return (
    <Container>
      <Frame>
        <HeaderFrame>
        <Logo>
            <a href="/">
                <img src="images/logo.png" alt="logo"/>
            </a>
        </Logo>

        <Menu>
            <MenuList onClick={handlePlantsClick}>Plants</MenuList>
            <MenuList>Contact</MenuList>
            <MenuList>Legend</MenuList>
        </Menu>

        <SignBtn onClick={handleLoginClick}>Sign In</SignBtn>

        <MypageBtn onClick={handleMypageClick}>Mypage</MypageBtn>
        </HeaderFrame>
      </Frame>
    </Container>
  );
};

export default Header;
