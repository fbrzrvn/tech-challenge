import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const CardTitle = styled.h1`
  color: ${COLOR.deepPurple500};
  font-size: 32px;
  text-align: center;
  margin-bottom: 16px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
`;

export const NavbarLink = styled(Link)`
  margin: 0 24px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 24px;
  color: ${COLOR.text};
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    color: ${COLOR.deepPurple500};
    transition: all 300ms ease-in-out;
  }
  @media screen and (max-width: 468px) {
    font-size: 18px;
    margin: 0 10px;
  }
`;
