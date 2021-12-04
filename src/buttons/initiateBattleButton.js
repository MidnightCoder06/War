import { battle } from '../utils/battle'

const InitiateBattleButton = () => {
  const { playerOne, playerTwo } = props;
  render(
    <button onClick={() => battle(playerOne, playerTwo)}> Initiate Battle </button>
  );
}

export default InitiateBattleButton;
