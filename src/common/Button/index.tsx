import { StyledButton } from "./styled";

interface ButtonProps {
  textBtn: string;
  onClick?: () => void;
}

const Button = ({ textBtn, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{textBtn}</StyledButton>;
};

export default Button;
