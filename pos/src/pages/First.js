import styled from "styled-components";
import COLOR from "../styles/color";

import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { ReactComponent as Logo } from "../assets/pos_Logo.svg";

function First() {
  return (
    <StFirst>
      <Logo className="logo" />
      <StFirstContainer>
        <h1>비밀번호</h1>
        <div className="input">
          <InputBox />
        </div>
        <div className="button">
          <Button>시작하기</Button>
        </div>
      </StFirstContainer>
    </StFirst>
  );
}
export default First;

const StFirst = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  .logo {
    margin-top: 200px;
    margin-bottom: 50px;
  }
`;
const StFirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin-top: 30px;
    margin-left: 10px;
    font-family: "SUIT Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
  }
  .button {
    margin-top: 30px;
  }
`;
