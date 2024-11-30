import styled from "styled-components";
import { colors } from "../color";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${colors.gray[100]};
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const LoginBox = styled.div`
  width: 100%;
  max-width: 30rem;
  height: 100%;
  max-height: 40rem;
  background: ${colors.gray[300]};
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: 10px;
`;

export const Button = styled.button`
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 5px;
  font-weight: 700;
  font-size: 1.1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const GoogleBtn = styled(Button)`
  background: ${colors.red[100]};
  margin-top: 3rem;
`;

export const FacebookBtn = styled(Button)`
  background: ${colors.blue[100]};
`;
