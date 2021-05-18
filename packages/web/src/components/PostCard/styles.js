import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px;
  margin-bottom: 16px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.2 ease-in-out;
`;

export const PostImg = styled.img`
  width: 250px;
  height: 200px;
  margin-bottom: 16px;
`;

export const PostInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 250px;
`;

export const PostH2 = styled.h2`
  color: ${COLOR.deepPurple500};
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const PostP = styled.p`
  color: ${COLOR.text};
  font-size: 1rem;
  margin-bottom: 10px;
`;
