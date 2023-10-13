import styled from "styled-components";

export const WelcomeText = styled.h2`
  max-width: 760px;
  padding: 10px;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
  }
`;
