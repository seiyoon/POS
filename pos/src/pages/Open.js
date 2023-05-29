import styled from "styled-components";
import { COLOR } from "../styles/color";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/pos_Logo.svg";

function Open() {
  return (
    <StOpen>
      <StOpenHeader>
        <Link to="/home">
          <Logo className="logo" />
        </Link>
      </StOpenHeader>
      <StOpenContainer>
        <LeftHomeContainer></LeftHomeContainer>
        <RightHomeContainer></RightHomeContainer>
      </StOpenContainer>
    </StOpen>
  );
}

export default Open;

const StOpen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const StOpenHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${COLOR.LIGHT_GRAY};
  .logo {
    width: 80px;
    margin-left: 20px;
  }
`;
const StOpenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const LeftHomeContainer = styled.div`
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  background: black;
`;
const RightHomeContainer = styled.div`
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
`;
