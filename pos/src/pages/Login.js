import styled from "styled-components";
import { COLOR } from "../styles/color";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { ReactComponent as Logo } from "../assets/pos_Logo.svg";

function Login() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (password !== "1234") {
      setPasswordError(true);
    }
  };

  const onClick = () => {
    if (password === "1234") {
      navigate("/home");
    }
  };

  return (
    <StFirst>
      <Logo className="logo" />
      <StFirstContainer>
        <h1>비밀번호</h1>
        <div className="input">
          <InputBox
            placeholder="비밀번호를 입력하세요"
            value={password}
            type="password"
            onChange={handleChangePassword}
          />
          {passwordError && <div className="error">비밀번호는 1234입니다.</div>}
        </div>
        <div className="button">
          <Button onClick={onClick}>시작하기</Button>
        </div>
      </StFirstContainer>
    </StFirst>
  );
}
export default Login;

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
  .error {
    margin-top: 5px;
    margin-left: 10px;
    font-size: 15px;
    height: 20px;
    color: ${COLOR.DARK_GRAY};
  }
  .button {
    margin-top: 40px;
  }
`;
