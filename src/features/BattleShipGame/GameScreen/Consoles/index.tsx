import { GameProps } from "../../interfaces";
import {
  Console,
  Info,
  LineProgress,
  Progress,
  StyledConsoles,
} from "./styled";

const Consoles = ({ message, isCurrentPlayer1 }: GameProps) => {
  return (
    <StyledConsoles>
      <Console $activePlayer={isCurrentPlayer1}>
        <Progress>
          {isCurrentPlayer1 ? (
            <h5>Active Console Capitan One</h5>
          ) : (
            <h5>Enemy turn...</h5>
          )}
          <LineProgress>
            {isCurrentPlayer1 && (
              <Info>
                Now is your turn Capitan One - last message: {message?.player1}
              </Info>
            )}
          </LineProgress>
          <LineProgress>
            {!isCurrentPlayer1 ? (
              <p>Our Last Shot Effect, Captain One =&gt; {message?.player1}</p>
            ) : (
              <Info>Enemy Console Info =&gt; {message?.player2}</Info>
            )}
          </LineProgress>
        </Progress>
      </Console>
      <Console $activePlayer={!isCurrentPlayer1}>
        <Progress>
          {!isCurrentPlayer1 ? (
            <h5>Active Console Capitan Two</h5>
          ) : (
            <h5>Enemy turn...</h5>
          )}
          <LineProgress>
            {!isCurrentPlayer1 && (
              <Info>
                Now is your turn Captain Two - last message: {message?.player2}
              </Info>
            )}
          </LineProgress>
          <LineProgress>
            {isCurrentPlayer1 ? (
              <p>Our Last Shot Effect, Captain Two =&gt; {message?.player2}</p>
            ) : (
              <Info>Enemy Console Info =&gt; {message?.player1}</Info>
            )}
          </LineProgress>
        </Progress>
      </Console>
    </StyledConsoles>
  );
};

export default Consoles;
