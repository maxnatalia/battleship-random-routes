import styled, { css } from "styled-components";

interface BoardPlayerProps {
  activePlayer: boolean;
}

interface CellProps {
  isClicked: boolean;
  isShipClicked: boolean;
  isShipSunk: boolean;
}

export const BoardPlayer = styled.div<BoardPlayerProps>`
  border: 2px solid orange;
  padding: 10px;
  transition: all 0.6s ease-in-out;

  ${({ activePlayer }) =>
    !activePlayer &&
    css`
      transform: scale(0.5);
      pointer-events: none;
      filter: blur(1px);
    `}
`;
export const Grid = styled.div``;

export const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export const Cell = styled.div<CellProps>`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryTransparent};
    color: ${({ theme }) => theme.color.dark};
  }

  ${({ isClicked }) =>
    isClicked &&
    css`
      background-color: blue;
      cursor: not-allowed;
    `}

  ${({ isShipClicked }) =>
    isShipClicked &&
    css`
      background-color: red;
      cursor: not-allowed;
    `}

    ${({ isShipSunk }) =>
    isShipSunk &&
    css`
      background-color: goldenrod;
      cursor: not-allowed;
    `}
`;
