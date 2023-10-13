import styled, { DefaultTheme } from "styled-components";
import {
  GiSubmarineMissile,
  GiShoonerSailboat,
  GiAnchor,
} from "react-icons/gi";

const commonStyles = {
  fontSize: "40px",
  color: `${({ theme }: DefaultTheme) => theme.color.primary}`,
};

export const IconSunkShip = styled(GiAnchor)`
  ${commonStyles};
`;

export const IconMiss = styled(GiSubmarineMissile)`
  ${commonStyles};
`;

export const IconHitShip = styled(GiShoonerSailboat)`
  ${commonStyles};
`;
