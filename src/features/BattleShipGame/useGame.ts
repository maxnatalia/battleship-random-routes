import { useState, useEffect } from "react";
import { BoardItemProps, MessageProps, ScoreProps } from "./interfaces";
import {
  shipsList,
  createEmptyBoard,
  placeShipsRandomly,
} from "../../utils/helpers";

const useGame = () => {
  const [startGame, setStartGame] = useState(false);
  const [playerBoard1, setPlayerBoard1] = useState<BoardItemProps[][]>([]);
  const [playerBoard2, setPlayerBoard2] = useState<BoardItemProps[][]>([]);
  const [isCurrentPlayer1, setIsCurrentPlayer1] = useState<boolean>(true);
  const [message, setMessage] = useState<MessageProps>({
    player1: "",
    player2: "",
  });
  const [scores, setScores] = useState<ScoreProps>({ player1: 0, player2: 0 });

  useEffect(() => {
    if (startGame) {
      const newEmptyBoard1 = createEmptyBoard();
      const updatedPlayerBoard1 = placeShipsRandomly(newEmptyBoard1, shipsList);
      setPlayerBoard1(updatedPlayerBoard1);

      const newEmptyBoard2 = createEmptyBoard();
      const updatedPlayerBoard2 = placeShipsRandomly(newEmptyBoard2, shipsList);
      setPlayerBoard2(updatedPlayerBoard2);
    }
  }, [startGame]);

  const handleStartGame = () => {
    setIsCurrentPlayer1(true);
    setScores({ player1: 0, player2: 0 });
    setMessage({
      player1: "🏹It's time to start attacking, Captain One...",
      player2: "🏹It's time to start attacking, Captain Two...",
    });
    setStartGame(prev => !prev);
  };

  const handleExitGame = () => setStartGame(prev => !prev);

  const handleSwitchPlayer = () => {
    setIsCurrentPlayer1(prevIsCurrentPlayer1 => !prevIsCurrentPlayer1);
  };

  const checkIfShipIsSunk = (shipName: string, currentPlayer: "P1" | "P2") => {
    if (currentPlayer === "P1") {
      const allShipCells = playerBoard1
        .flat()
        .filter(cell => cell.shipName === shipName);

      const allHit = allShipCells.every(cell => cell.isHit);

      if (allHit) {
        allShipCells.forEach(cell => {
          cell.isSunk = true;
        });
        setPlayerBoard1([...playerBoard1]);
        setScores(scores => ({ ...scores, player1: scores.player1 + 1 }));
        setMessage({ ...message, player1: "🛳️Captain One, we sunk a ship!" });
      }
    } else {
      const allShipCells = playerBoard2
        .flat()
        .filter(cell => cell.shipName === shipName);

      const allHit = allShipCells.every(cell => cell.isHit);

      if (allHit) {
        allShipCells.forEach(cell => {
          cell.isSunk = true;
        });
        setPlayerBoard2([...playerBoard2]);
        setScores(scores => ({ ...scores, player2: scores.player2 + 1 }));
        setMessage({ ...message, player2: "🛳️Captain Two, we sunk a ship!" });
      }
    }
  };

  const handleClickCell = (
    item: BoardItemProps,
    currentPlayer: "P1" | "P2"
  ) => {
    if (currentPlayer === "P1") {
      if (item.isShip) {
        item.isHit = true;
        setMessage({
          ...message,
          player1: "⚓Captain One, we hit something...!",
        });
        checkIfShipIsSunk(item.shipName, currentPlayer);
      } else {
        item.isClicked = true;
        setMessage({
          ...message,
          player1: "🆘Ups, we missed...Capitan!",
        });
        handleSwitchPlayer();
      }
    } else {
      if (item.isShip) {
        item.isHit = true;
        setMessage({
          ...message,
          player2: "⚓Captain Two, we hit something...!",
        });
        checkIfShipIsSunk(item.shipName, currentPlayer);
      } else {
        item.isClicked = true;
        setMessage({
          ...message,
          player2: "🆘Ups, we missed...Capitan!",
        });
        handleSwitchPlayer();
      }
    }
  };

  return {
    startGame,
    handleStartGame,
    handleExitGame,
    playerBoard1,
    playerBoard2,
    handleClickCell,
    isCurrentPlayer1,
    message,
    scores,
  };
};

export default useGame;
