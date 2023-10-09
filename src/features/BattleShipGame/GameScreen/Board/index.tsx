import { BoardItemProps } from "../../useGame";
import { BoardPlayer, Cell, Grid, Row } from "./styled";

interface BoardProps {
  playerBoard: BoardItemProps[][];
  handleClickCell: (item: BoardItemProps) => void;
  activePlayer: boolean;
}

const Board = ({ handleClickCell, playerBoard, activePlayer }: BoardProps) => {
  return (
    <BoardPlayer activePlayer={activePlayer}>
      {playerBoard.map((row, rowIndex) => (
        <Grid key={rowIndex}>
          <Row>
            {row.map(col => (
              <Cell
                key={col.id}
                onClick={() => handleClickCell(col)}
                isClicked={col.isClicked}
                isShipClicked={col.isShip && col.isClicked}
                isShipSunk={col.isSunk}
              >
                {col.isShip ? "Y" : `${col.label}`}
              </Cell>
            ))}
          </Row>
        </Grid>
      ))}
    </BoardPlayer>
  );
};

export default Board;
