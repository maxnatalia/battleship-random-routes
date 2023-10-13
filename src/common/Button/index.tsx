import { StyledButton } from "./styled";

interface ButtonProps {
  textBtn: string;
  disabled?: boolean;
  title?: string;
  onClick?: () => void;
}

const Button = ({ textBtn, disabled, title, onClick }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} title={title}>
      {textBtn}
    </StyledButton>
  );
};

export default Button;
