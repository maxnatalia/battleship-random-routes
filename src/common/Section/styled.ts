import styled, { css } from "styled-components";
import { SectionProps } from ".";

export const StyledSection = styled.div<SectionProps>`
  margin: 20px auto;
  padding: 20px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  ${({ $top }) =>
    $top &&
    css`
      flex-direction: column;
    `}

  ${({ $center }) =>
    $center &&
    css`
      justify-content: center;
    `}

    ${({ $modal }) =>
    $modal &&
    css`
      width: 60%;
      border-radius: 20px;
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.dark};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        width: 80%;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 100%;
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 10px;
    flex-direction: column-reverse;
  }
`;
