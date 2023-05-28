import styled from "styled-components";
import { COLOR } from "../styles/color";

export const InputBox = ({ onChange, value, type, placeholder }) => {
  return (
    <StInput
      type={type}
      value={value}
      placeholder={placeholder}
      maxLength={4}
      onChange={onChange}
    />
  );
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
