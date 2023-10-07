import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 20px 26px;
  margin: 10px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.color.dark};
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.color.primary};
  box-shadow: 1px 1px 20px ${({ theme }) => theme.color.dark};
  cursor: pointer;
  transition: all 0.6s ease;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.dark};
    box-shadow: 1px 1px 20px ${({ theme }) => theme.color.primary};
  }
`;
