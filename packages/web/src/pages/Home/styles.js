import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const PostContainer = styled.div`
  background: ${COLOR.navbar};
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  margin: 0 auto;
  max-width: 1100px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`;
