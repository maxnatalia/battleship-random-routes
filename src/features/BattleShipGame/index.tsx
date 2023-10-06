import useGame from "./useGame";
import GameScreen from "./GameScreen";
import WelcomeScreen from "./WelcomeScreen";

const BattleShipGame = () => {
  const { startGame, handleStartGame, handleExitGame } = useGame();
  return (
    <>
      {startGame ? (
        <GameScreen handleExitGame={handleExitGame} />
      ) : (
        <WelcomeScreen handleStartGame={handleStartGame} />
      )}
    </>
  );
};

export default BattleShipGame;
