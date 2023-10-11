import {
  BoardItemProps,
  ShipProps,
} from "../features/BattleShipGame/interfaces";

export const currentYearDisplay = () => new Date().getFullYear();

export const getRandomPosition = (rows: number, cols: number) => {
  const randomRow = Math.floor(Math.random() * rows);
  const randomCol = Math.floor(Math.random() * cols);
  return { row: randomRow, col: randomCol };
};

export const shipsList = [
  { size: 4, name: "Battleship" },
  { size: 3, name: "Destroyer 1" },
  { size: 3, name: "Destroyer 2" },
  { size: 2, name: "Frigate 1" },
  { size: 2, name: "Frigate 2" },
  { size: 2, name: "Frigate 3" },
  { size: 1, name: "Submarine 1" },
  { size: 1, name: "Submarine 2" },
  { size: 1, name: "Submarine 3" },
  { size: 1, name: "Submarine 4" },
];

export const uniqueShipsList = [
  { size: 4, name: "Battleship", quantity: 1 },
  { size: 3, name: "Destroyer", quantity: 2 },
  { size: 2, name: "Frigate", quantity: 3 },
  { size: 1, name: "Submarine", quantity: 4 },
];

export const cols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
export const rows = 10;

export const createEmptyBoard = () =>
  Array.from({ length: rows }, (_, rowIndex) =>
    Array.from(cols, (_, colIndex) => ({
      id: `${rowIndex}x${colIndex}`,
      indexRow: rowIndex,
      indexCol: colIndex,
      label: `${cols[colIndex]}${rowIndex + 1}`,
      isShip: false,
      shipName: "empty",
      isClicked: false,
      isHit: false,
      isSunk: false,
    }))
  );

export const placeShipsRandomly = (
  emptyBoard: BoardItemProps[][],
  ships: ShipProps[]
): BoardItemProps[][] => {
  const rows = emptyBoard.length;
  const cols = emptyBoard[0].length;

  const boardWithShips = [...emptyBoard];

  ships.forEach(ship => {
    const { size } = ship;
    let placed = false;
    let isVertical = Math.random() < 0.5;

    while (!placed) {
      const { row, col } = getRandomPosition(rows, cols);

      if (
        (isVertical && row + size <= rows) ||
        (!isVertical && col + size <= cols)
      ) {
        let canPlace = true;

        if (isVertical) {
          for (let i = row - 1; i <= row + size; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
              if (
                i >= 0 &&
                i < rows &&
                j >= 0 &&
                j < cols &&
                boardWithShips[i][j].isShip
              ) {
                canPlace = false;
                break;
              }
            }
            if (!canPlace) break;
          }
        } else {
          for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + size; j++) {
              if (
                i >= 0 &&
                i < rows &&
                j >= 0 &&
                j < cols &&
                boardWithShips[i][j].isShip
              ) {
                canPlace = false;
                break;
              }
            }
            if (!canPlace) break;
          }
        }

        if (canPlace) {
          for (let i = 0; i < size; i++) {
            if (isVertical) {
              boardWithShips[row + i][col].isShip = true;
              boardWithShips[row + i][col].shipName = ship.name;
            } else {
              boardWithShips[row][col + i].isShip = true;
              boardWithShips[row][col + i].shipName = ship.name;
            }
          }

          placed = true;
        }
      }
    }
  });
  return boardWithShips;
};
