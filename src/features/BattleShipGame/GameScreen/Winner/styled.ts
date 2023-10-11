import styled from "styled-components";

export const Title = styled.h3`
  font-size: 50px;
  color: ${({ theme }) => theme.color.dark};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.dark};
  font-weight: 600;
  font-size: 22px;
`;

export const BoxText = styled.div`
  padding: 20px;
`;
