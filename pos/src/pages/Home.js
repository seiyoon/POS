import styled from "styled-components";
import { COLOR } from "../styles/color";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/pos_Logo.svg";
import { ReactComponent as Open } from "../assets/openstore.svg";
import { ReactComponent as Close } from "../assets/closestore.svg";

function Home() {
  return (
    <StHome>
      <StHomeHeader>
        <Link to="/home">
          <Logo className="logo" />
        </Link>
      </StHomeHeader>
      <StHomeContainer>
        <LeftHomeContainer>
          <OpenButton>
            <h1>개점하기</h1>
            <Open className="open" />
          </OpenButton>
        </LeftHomeContainer>
        <RightHomeContainer>
          <CloseButton>
            <h1>종료하기</h1>
            <Close className="close" />
          </CloseButton>
        </RightHomeContainer>
      </StHomeContainer>
    </StHome>
  );
}

export default Home;

const StHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const StHomeHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${COLOR.LIGHT_GRAY};
  .logo {
    width: 80px;
    margin-left: 20px;
  }
`;
const StHomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 200px;
`;
const LeftHomeContainer = styled.div`
  float: left;
  margin-right: 70px;
`;
const OpenButton = styled.button`
  width: 280px;
  height: 300px;
  border: none;
  border-radius: 20px;
  background-color: ${COLOR.LIGHT_GRAY};
  :hover {
    background-color: ${COLOR.BRIGHT_GRAY};
  }
  h1 {
    margin-bottom: 30px;
    font-family: "SUIT Variable";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.5px;
  }
  .open {
    width: 100px;
    height: 100px;
  }
`;
const RightHomeContainer = styled.div`
  float: right;
  margin-left: 70px;
`;
const CloseButton = styled.button`
  width: 280px;
  height: 300px;
  border: none;
  border-radius: 20px;
  background-color: ${COLOR.LIGHT_GRAY};
  :hover {
    background-color: ${COLOR.BRIGHT_GRAY};
  }
  h1 {
    margin-bottom: 30px;
    font-family: "SUIT Variable";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.5px;
  }
  .close {
    width: 100px;
    height: 100px;
  }
`;
