import {
  BoardItemProps,
  GameProps,
  MessageProps,
  ScoreProps,
} from "../interfaces";
import Layout from "../../../common/Layout";
import Section from "../../../common/Section";
import Button from "../../../common/Button";
import backgroundGame from "./backgroundGame.jpg";
import Legend from "./Legend";
import Board from "./Board";
import Winner from "./Winner";
import ShipsList from "./ShipsList";
import Scoring from "./Scoring";
import Consoles from "./Consoles";

interface GameScreenProps extends GameProps {
  playerBoard1: BoardItemProps[][];
  playerBoard2: BoardItemProps[][];
  handleClickCell: (item: BoardItemProps, currentPlayer: "P1" | "P2") => void;
  isCurrentPlayer1: boolean;
  scores: ScoreProps;
  message: MessageProps;
}

const GameScreen = ({
  handleExitGame,
  playerBoard1,
  playerBoard2,
  handleClickCell,
  isCurrentPlayer1,
  scores,
  message,
}: GameScreenProps) => {
  return (
    <Layout backgroundImage={backgroundGame}>
      {scores.player1 === 10 || scores.player2 === 10 ? (
        <Winner scores={scores} handleExitGame={handleExitGame} />
      ) : (
        <>
          <Section $top>
            <Scoring scores={scores} isCurrentPlayer1={isCurrentPlayer1} />
            <Consoles isCurrentPlayer1={isCurrentPlayer1} message={message} />
          </Section>
          <Section $center>
            <Board
              handleClickCell={handleClickCell}
              playerBoard={playerBoard1}
              $activePlayer={isCurrentPlayer1}
              currentPlayer={"P1"}
            />
            <Board
              handleClickCell={handleClickCell}
              playerBoard={playerBoard2}
              $activePlayer={!isCurrentPlayer1}
              currentPlayer={"P2"}
            />
          </Section>
          <Section>
            <ShipsList />
            <Button textBtn="Exit Game" onClick={handleExitGame} />
            <Legend />
          </Section>
        </>
      )}
    </Layout>
  );
};

export default GameScreen;
