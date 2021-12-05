import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { card_value_map } from '../game/globals';
import { increaseNumberOfCards, decreaseNumberOfCards } from '../redux/features/playerSlice';
// you tried to put the helper function `battle` in a utils folder and import it
// import { battle } from '../utils/battle'
// but hooks can only be called in components, not regular javascript functions


// initiateWar can call battle? Possible circular depednency?
// if someone wins / loses record that in the database
// do all the game logic here.
const InitiateBattleButton = (props) => {
  const { playerOne, playerTwo } = props;
  const dispatch = useDispatch();

  const battle = (playerOne, playerTwo) => {
    if (card_value_map[playerOne.deck[0]] === card_value_map[playerTwo.deck[0]]) {
      // this should trigger some cool animation
      war(playerOne.deck[0], playerTwo.deck[0])
    } else if(card_value_map[playerOne.deck[0]] > card_value_map[playerTwo.deck[0]]) {
      console.log('player 1 wins the battle')
      dispatch(increaseNumberOfCards(["playerOne", 1]))
      dispatch(decreaseNumberOfCards(["playerTwo", 1]))
    } else {
      console.log('player 2 wins the battle')
      dispatch(increaseNumberOfCards(["playerTwo", 1]))
      dispatch(decreaseNumberOfCards(["playerOne", 1]))
    }
  }

  // todo: prove hoisting exists by defining `initiateWar` down here ... after it is invoked
  // TODO: write a function that does a 'war' between players
    // if this causes someone to lose then trigger the function to store the win or loss in the database
  const war = (playerOne, playerTwo) => {
    console.log('war initiated')
  }

  return(
    <button onClick={() => battle(playerOne, playerTwo)}> Initiate Battle </button>
  );
}

export default InitiateBattleButton;
