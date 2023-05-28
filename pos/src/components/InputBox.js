import styled from "styled-components";
import { COLOR } from "../styles/color";

export const InputBox = () => {
  return <StInput placeholder="임시 비밀번호 : 1234" maxLength={4} />;
};

const StInput = styled.input`
  width: 350px;
  height: 50px;
  border: 2px solid ${COLOR.MAIN};
  border-radius: 15px;
  font-size: 19px;
  padding-left: 15px;
  ::placeholder {
    font-family: "SUIT Variable";
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    color: ${COLOR.MEDIUM_GRAY};
  }
  :focus {
    outline: none;
  }
`;
