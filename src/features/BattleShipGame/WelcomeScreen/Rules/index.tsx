import Button from "../../../../common/Button";
import Section from "../../../../common/Section";
import { RulesProps } from "../useToggleRules";

const Rules = ({ handleToggleRules }: RulesProps) => {
  return (
    <Section $modal $top>
      <p>
        "BattleShip: Random Routes" is a modern take on the classic Battleship
        game, offering dynamic gameplay for two players. It utilizes randomly
        generated boards, providing endless variety and challenges during sea
        battles.
      </p>
      <h3>Key Features of the Game:</h3>
      <ul>
        <li>
          <span>Randomly Generated Boards:</span>
          Each game starts with randomly generated boards on which both players
          place their fleets. This means that each battle is unique, and players
          must rely on their tactical intelligence.
        </li>

        <li>
          <span>Fleets and Tactics:</span>
          Players command fleets consisting of various types of ships. Each ship
          occupies a different number of spaces on the board, introducing a
          strategic element.
        </li>
        <li>
          <span>Competition and Precision:</span>
          The game fosters competition between players, requiring precise shots
          and tactical decisions. The goal is to sink all the opponent's ships
          before they do the same.
        </li>
      </ul>
      <Button textBtn="Close" onClick={handleToggleRules} />
    </Section>
  );
};

export default Rules;
