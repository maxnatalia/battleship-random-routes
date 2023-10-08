import { useState, useEffect } from "react";

export interface GameProps {
  startGame?: boolean;
  handleStartGame?: () => void;
  handleExitGame?: () => void;
}

export interface BoardProps {
  playerBoard?: BoardItemProps[];
}

export interface BoardItemProps {
  id: string;
  indexRow: number;
  indexCol: number;
  label: string;
  isShip: boolean;
  isClicked: boolean;
}

export interface ShipProps {
  size: number;
  name: string;
  isHit: boolean;
  isSunk: boolean;
}

const initialShips = [
  { size: 4, name: "🛳️", isHit: false, isSunk: false },
  { size: 3, name: "🛳️", isHit: false, isSunk: false },
  { size: 3, name: "🛳️", isHit: false, isSunk: false },
  { size: 2, name: "🛳️", isHit: false, isSunk: false },
  { size: 2, name: "🛳️", isHit: false, isSunk: false },
  { size: 2, name: "🛳️", isHit: false, isSunk: false },
  { size: 1, name: "🛳️", isHit: false, isSunk: false },
  { size: 1, name: "🛳️", isHit: false, isSunk: false },
  { size: 1, name: "🛳️", isHit: false, isSunk: false },
  { size: 1, name: "🛳️", isHit: false, isSunk: false },
];

const cols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const rows = 10;

const createEmptyBoard = () =>
  Array.from({ length: rows }, (_, rowIndex) =>
    Array.from(cols, (_, colIndex) => ({
      id: `${rowIndex}x${colIndex}`,
      indexRow: rowIndex,
      indexCol: colIndex,
      label: `${cols[colIndex]}${rowIndex + 1}`,
      isShip: false,
      isClicked: false,
    }))
  );

const useGame = () => {
  const [startGame, setStartGame] = useState(false);
  const [playerBoard, setPlayerBoard] = useState<BoardItemProps[][]>([]);
  const [shipsList, setShipsList] = useState<ShipProps[]>(initialShips);

  useEffect(() => {
    if (startGame) {
      const newEmptyBoard = createEmptyBoard();
      setPlayerBoard(newEmptyBoard);
      console.log(shipsList);
    }
  }, [startGame]);

  const handleStartGame = () => {
    setStartGame(prev => !prev);
  };

  const handleExitGame = () => setStartGame(prev => !prev);

  const handleClickCell = (item: BoardItemProps) => {
    setPlayerBoard(prevBoard =>
      prevBoard.map(row =>
        row.map(col => (col.id === item.id ? { ...col, isClicked: true } : col))
      )
    );
  };

  return {
    startGame,
    handleStartGame,
    handleExitGame,
    playerBoard,
    handleClickCell,
  };
};

export default useGame;
