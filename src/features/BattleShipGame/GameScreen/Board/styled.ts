import styled, { css, keyframes } from "styled-components";
interface BoardPlayerProps {
  $activePlayer: boolean;
}

interface CellProps {
  $isClicked: boolean;
  $isShipClicked: boolean;
  $isShipSunk: boolean;
}

const swingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const BoardPlayer = styled.div<BoardPlayerProps>`
  border: 6px solid ${({ theme }) => theme.color.primaryTransparent};
  border-radius: 20px;
  padding: 10px;
  transition: all 0.6s ease-in-out;

  ${({ $activePlayer }) =>
    !$activePlayer &&
    css`
      transform: scale(0.5);
      pointer-events: none;
      filter: blur(1px);
    `}
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export const Cell = styled.div<CellProps>`
  width: 50px;
  height: 50px;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $isClicked, $isShipClicked, $isShipSunk }) =>
    $isClicked || $isShipClicked || $isShipSunk ? "not-allowed" : "pointer"};
  transition: all 0.5s ease-in-out;

  &:hover {
    ${({ $isClicked, $isShipClicked, $isShipSunk, theme }) =>
      !($isClicked || $isShipClicked || $isShipSunk) &&
      css`
        background-color: ${theme.color.primaryTransparent};
        color: ${theme.color.dark};
        font-weight: 600;
      `}
  }

  ${({ $isClicked }) =>
    $isClicked &&
    css`
      border: 1px solid ${({ theme }) => theme.color.primaryTransparent};
    `}

  ${({ $isShipClicked, $isShipSunk }) =>
    $isShipClicked &&
    !$isShipSunk &&
    css`
      animation: ${swingAnimation} 0.5s ease infinite;
    `}

    ${({ $isShipSunk }) =>
    $isShipSunk &&
    css`
      background-image: linear-gradient(
        rgba(0, 18, 36, 0.4),
        rgba(215, 155, 28, 0.5)
      );
    `}
`;
