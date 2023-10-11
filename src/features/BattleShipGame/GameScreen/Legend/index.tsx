import {
  IconHitShip,
  IconMiss,
  IconSunkShip,
} from "../../../../common/Icons/styled";
import { BoxDefinition, ListDefinition, StyledLegend } from "./styled";

const Legend = () => {
  return (
    <StyledLegend>
      <h4>Legend</h4>
      <ListDefinition>
        <BoxDefinition>
          <dt>
            <IconHitShip />
          </dt>
          <dd>Hit</dd>
        </BoxDefinition>
        <BoxDefinition>
          <dt>
            <IconMiss />
          </dt>
          <dd>Miss</dd>
        </BoxDefinition>
        <BoxDefinition>
          <dt>
            <IconSunkShip />
          </dt>
          <dd>Sunk</dd>
        </BoxDefinition>
      </ListDefinition>
    </StyledLegend>
  );
};

export default Legend;
