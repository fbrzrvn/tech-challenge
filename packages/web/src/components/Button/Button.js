import styled from "styled-components";
import { COLOR } from "../../styles/colors";

const Button = styled.button`
  background: ${COLOR.deepPurple500};
  color: ${COLOR.background};
  padding: 12px 30px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    transition: all 300ms ease-in-out;
    background: ${COLOR.deepPurple400};
  }
`;

export default Button;
