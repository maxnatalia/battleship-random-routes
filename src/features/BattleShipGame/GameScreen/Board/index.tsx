import {
  IconHitShip,
  IconMiss,
  IconSunkShip,
} from "../../../../common/Icons/styled";
import { BoardItemProps } from "../../interfaces";
import { BoardPlayer, Cell, Row } from "./styled";

interface BoardProps {
  playerBoard: BoardItemProps[][];
  handleClickCell: (item: BoardItemProps, currentPlayer: "P1" | "P2") => void;
  $activePlayer: boolean;
  currentPlayer: "P1" | "P2";
}

const Board = ({
  handleClickCell,
  playerBoard,
  $activePlayer,
  currentPlayer,
}: BoardProps) => {
  return (
    <BoardPlayer $activePlayer={$activePlayer}>
      {playerBoard.map((row, rowIndex) => (
        <div key={rowIndex}>
          <Row>
            {row.map(col => (
              <Cell
                key={col.id}
                onClick={() => handleClickCell(col, currentPlayer)}
                $isClicked={col.isClicked}
                $isShipClicked={col.isHit}
                $isShipSunk={col.isSunk}
              >
                {col.isClicked && <IconMiss />}
                {col.isHit && !col.isSunk && <IconHitShip />}
                {col.isSunk && <IconSunkShip />}
                {!col.isClicked && !col.isHit && !col.isSunk && col.label}
              </Cell>
            ))}
          </Row>
        </div>
      ))}
    </BoardPlayer>
  );
};

export default Board;
