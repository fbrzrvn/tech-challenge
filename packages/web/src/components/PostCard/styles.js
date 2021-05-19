import styled, { keyframes } from "styled-components";
import { COLOR } from "../../styles/colors";

export const Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 24px;
  margin-bottom: 16px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.2 ease-in-out;
`;

export const PostImg = styled.img`
  width: 250px;
  aspect-ratio: 16/9;
  border-radius: 10px 10px 0 0;
`;

export const PostInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 0 16px;
`;

export const PostH2 = styled.h2`
  color: ${COLOR.deepPurple500};
  font-size: 24px;
  margin: 16px 0 8px;
`;

export const PostP = styled.p`
  color: ${COLOR.text};
  font-size: 24px;
  font-weight: 400;
  margin: 0 0 10px;
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostSpan = styled.span`
  color: ${COLOR.textSecondary};
  font-size: 12px;
`;

export const PostIcon = styled.button`
  font-size: 1.5rem;
  color: ${COLOR.text};
  border: none;
  background: transparent;
  cursor: pointer;
  &:hover {
    color: ${COLOR.deepPurple500};
  }
`;

const fade = keyframes`
0% {
  bottom: 0;
    opacity: 0;
}
50% {
  bottom: 30px;
  opacity: 1;
}
100% {
  bottom: 0;
  opacity: 0;
}
`;

export const SuccessMsg = styled.div`
  color: ${COLOR.success900};
  background: ${COLOR.success100};
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  animation: 3s ${fade} ease-in-out;
  padding: 16px;
`;
