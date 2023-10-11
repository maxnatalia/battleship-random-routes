import styled, { css } from "styled-components";

interface ActivePlayerProps {
  $activePlayer?: boolean;
}

export const StyledConsoles = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const Console = styled.div<ActivePlayerProps>`
  padding: 20px;
  border: 6px solid ${({ theme }) => theme.color.darkTransparent};
  border-radius: 20px;

  ${({ $activePlayer }) =>
    $activePlayer &&
    css`
      border: 6px solid ${({ theme }) => theme.color.primary};
      font-size: 22px;
    `}
`;

export const Progress = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.color.darkTransparent};
  border-radius: 20px;
`;

export const LineProgress = styled.div`
  line-height: 2;
`;

export const Info = styled.div`
  margin: 20px auto;
  padding: 10px;
  border-radius: 20px;
  background-image: linear-gradient(
    rgba(215, 155, 28, 0.6),
    rgba(215, 155, 28, 0.8)
  );
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.dark};
`;
