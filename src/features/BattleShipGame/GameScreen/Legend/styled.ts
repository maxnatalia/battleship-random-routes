import styled from "styled-components";

export const StyledLegend = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 6px solid ${({ theme }) => theme.color.primaryTransparent};
  border-radius: 20px;
`;

export const ListDefinition = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BoxDefinition = styled.div`
  display: flex;
  align-items: center;
`;
