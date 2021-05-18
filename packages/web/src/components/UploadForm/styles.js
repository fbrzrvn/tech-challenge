import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const Container = styled.div`
  background: ${COLOR.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  margin: auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 648px) {
    width: 100%;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 24px 0;
  }
`;

export const FormH1 = styled.h1`
  color: ${COLOR.deepPurple500};
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  max-width: 80%;
  margin: 24px auto;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const FormWrap = styled.form`
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  @media screen and (max-width: 480px) {
    padding: 32px 16px;
  }
`;

export const SelectWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Select = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  margin-bottom: 16px;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid ${COLOR.deepPurple300};
`;
export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: ${COLOR.deepPurple300};
  }
  &:checked + ${Select} {
    background: ${COLOR.deepPurple300};
    border: 2px solid ${COLOR.deepPurple700};
  }
  &:checked + ${RadioButtonLabel} {
    background: ${COLOR.deepPurple300};
    border: 1px solid ${COLOR.deepPurple700};
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: ${COLOR.text};
`;

export const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 24px;
  border: none;
  border-radius: 4px;
  outline: ${({ error }) => error && `none`};
  border: ${({ error }) => error && `1px solid ${COLOR.danger700}`};
  &:active,
  &:focus {
    outline: ${({ error }) => !error && `1px solid ${COLOR.deepPurple300}`};
  }
`;

export const FormTextarea = styled.textarea`
  padding: 10px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  outline: ${({ error }) => error && `none`};
  border: ${({ error }) => error && `1px solid ${COLOR.danger700}`};
  &:active,
  &:focus {
    outline: ${({ error }) => !error && `1px solid ${COLOR.deepPurple300}`};
  }
`;

export const FileInputWrap = styled.div`
  display: flex;
  flex-direction: column;
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
