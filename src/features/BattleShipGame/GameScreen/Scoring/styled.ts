import styled from "styled-components";

export const ScoresBox = styled.div`
  min-width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.darkTransparent};
  border-radius: 20px;
  border: 4px solid ${({ theme }) => theme.color.dark};
`;

export const InfoPoints = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 20px;
`;

export const Points = styled.span`
  padding: 20px;
  font-size: 48px;
  font-weight: 600;
`;
