import styled from "styled-components";
import { COLOR } from "../styles/color";

export const Button = ({ children, onClick }) => {
  return <StButton onClick={onClick}>{children}</StButton>;
};

const StButton = styled.button`
  width: 370px;
  height: 55px;
  background: ${COLOR.MAIN};
  border: 2px solid ${COLOR.MAIN};
  border-radius: 15px;
  font-size: 19px;
  font-weight: 600;
  color: ${COLOR.MAIN_WHITE};
  letter-spacing: 1px;
  :hover {
    background: ${COLOR.MAIN_HOVER};
    border: 2px solid ${COLOR.MAIN_HOVER};
  }
`;
