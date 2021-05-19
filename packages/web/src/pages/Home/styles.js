import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const PostContainer = styled.div`
  background: ${COLOR.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 24px;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    min-height: 1100px;
  }
  @media screen and (max-width: 480px) {
    min-height: 1300px;
  }
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  grid-gap: 16px;
  margin: 0 auto;
  max-width: 1100px;
`;
