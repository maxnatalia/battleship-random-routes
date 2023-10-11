import useGame from "./useGame";
import GameScreen from "./GameScreen";
import WelcomeScreen from "./WelcomeScreen";

const BattleShipGame = () => {
  const {
    startGame,
    handleStartGame,
    handleExitGame,
    playerBoard1,
    playerBoard2,
    handleClickCell,
    isCurrentPlayer1,
    scores,
    message,
  } = useGame();
  return (
    <>
      {startGame ? (
        <GameScreen
          handleExitGame={handleExitGame}
          playerBoard1={playerBoard1}
          playerBoard2={playerBoard2}
          handleClickCell={handleClickCell}
          isCurrentPlayer1={isCurrentPlayer1}
          scores={scores}
          message={message}
        />
      ) : (
        <WelcomeScreen handleStartGame={handleStartGame} />
      )}
    </>
  );
};

export default BattleShipGame;
