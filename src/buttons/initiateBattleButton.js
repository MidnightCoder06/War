import { battle } from '../utils/battle'

const InitiateBattleButton = (props) => {
  const { playerOne, playerTwo } = props;
  return(
    <button onClick={() => battle(playerOne, playerTwo)}> Initiate Battle </button>
  );
}

export default InitiateBattleButton;
