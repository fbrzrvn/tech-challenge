import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  width: 80%;
  margin: 24px auto;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
`;

export const CardTitle = styled.h1`
  color: ${COLOR.deepPurple500};
  font-size: 32px;
  text-align: center;
  margin-bottom: 16px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const CardBody = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
`;

export const LinkWrap = styled.div`
  text-align: right;
  margin-top: 16px;
  & * {
    text-decoration: none;
    font-size: 14px;
    color: ${COLOR.textSecondary};
  }
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;
