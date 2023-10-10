import Layout from "../../../common/Layout";
import Button from "../../../common/Button";
import { GameProps } from "../interfaces";
import backgroundWelcome from "./backgroundWelcome.jpg";
import Rules from "./Rules";
import useToggleRules from "./useToggleRules";
import { WelcomeText } from "./styled";

const WelcomeScreen = ({ handleStartGame }: GameProps) => {
  const { openRules, handleToggleRules } = useToggleRules();

  return (
    <Layout backgroundImage={backgroundWelcome}>
      <WelcomeText>
        Are you ready to lead your fleet and face off against your opponent on
        uncharted waters?
      </WelcomeText>
      <Button textBtn="Start Game" onClick={handleStartGame} />
      <Button textBtn="Game Rules" onClick={handleToggleRules} />
      {openRules && <Rules handleToggleRules={handleToggleRules} />}
    </Layout>
  );
};

export default WelcomeScreen;
