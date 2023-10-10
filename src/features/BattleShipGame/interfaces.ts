export interface GameProps {
  startGame?: boolean;
  handleStartGame?: () => void;
  handleExitGame?: () => void;
  currentPlayer?: boolean;
  message?: MessageProps;
  scores?: ScoreProps;
}

export interface BoardProps {
  playerBoard1?: BoardItemProps[];
  playerBoard2?: BoardItemProps[];
}

export interface BoardItemProps {
  id: string;
  indexRow: number;
  indexCol: number;
  label: string;
  isShip: boolean;
  shipName: string;
  isClicked: boolean;
  isHit: boolean;
  isSunk: boolean;
}

export interface ShipProps {
  size: number;
  name: string;
}

export interface MessageProps {
  player1: string;
  player2: string;
}

export interface ScoreProps {
  player1: number;
  player2: number;
}
