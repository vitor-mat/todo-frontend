import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const Title = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  width: 20rem;
  margin-bottom: 1rem;

  @media (max-width: 500px) {
    gap: 0;
    width: 12rem;
    overflow: hidden;
  }
`;