import { GameProps } from "../../interfaces";
import Section from "../../../../common/Section";
import Button from "../../../../common/Button";
import { BoxText, Text, Title } from "./styled";

const Winner = ({ scores, handleExitGame }: GameProps) => {
  return (
    <Section $modal $top>
      <Title>Congratulations! 🎉</Title>
      <Text>
        The Winner is The{" "}
        {scores?.player1 === 10
          ? "Capitan One!"
          : scores?.player2 === 10
          ? "Capitan Two!"
          : null}
      </Text>
      <Text>
        Result: {scores?.player1} - {scores?.player2}
      </Text>
      <BoxText>
        <Text>Victory in the game Battleship: Random Routes is yours!</Text>
        <Text>
          Your exceptional talent and tactical skills have led you to a
          well-deserved victory in the Battleship app.
        </Text>
        <Text>This is no small achievement! Well done!</Text>
      </BoxText>
      <Button textBtn="Close And Start New Battle" onClick={handleExitGame} />
    </Section>
  );
};

export default Winner;
