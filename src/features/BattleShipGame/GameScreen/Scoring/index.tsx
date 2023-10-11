import { GameProps } from "../../interfaces";
import { InfoPoints, Points, ScoresBox } from "./styled";

const Scoring = ({ scores, isCurrentPlayer1 }: GameProps) => {
  return (
    <ScoresBox>
      <InfoPoints>
        <Points>{scores?.player1}</Points>
        <div>
          <h4>Battle Points - Sunken Ships</h4>
        </div>
        <Points>{scores?.player2}</Points>
      </InfoPoints>
      <div>
        <span>
          🆘 Attention 🆘: Now{" "}
          {isCurrentPlayer1 ? "Capitan One" : "Capitan Two"} is attacking!
        </span>
      </div>
    </ScoresBox>
  );
};

export default Scoring;
