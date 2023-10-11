import styled from "styled-components";

export const ShipsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 6px solid ${({ theme }) => theme.color.primaryTransparent};
  border-radius: 20px;
`;

export const BoxIcons = styled.div`
  flex: 1;
`;

export const BoxShip = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
