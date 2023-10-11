import { IconHitShip } from "../../../../common/Icons/styled";
import { uniqueShipsList } from "../../../../utils/helpers";
import { BoxShip, BoxIcons, ShipsContainer } from "./styled";

const ShipsList = () => {
  return (
    <ShipsContainer>
      <h4>Types of ships available at sea:</h4>
      {uniqueShipsList.map((ship, index) => (
        <BoxShip key={index}>
          <BoxIcons>
            {Array(ship.size)
              .fill(<IconHitShip />)
              .map((icon, i) => (
                <span key={i}>{icon}</span>
              ))}
          </BoxIcons>
          <p>{ship.name}</p>
          <p>x {ship.quantity}</p>
        </BoxShip>
      ))}
    </ShipsContainer>
  );
};

export default ShipsList;
