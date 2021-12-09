import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { card_value_map } from '../game/globals';
import { increaseNumberOfCards, decreaseNumberOfCards } from '../redux/features/playerSlice';
// you tried to put the helper function `battle` in a utils folder and import it
// import { battle } from '../utils/battle'
// but hooks can only be called in components, not regular javascript functions


/*

let sample = [1,2,3,4,5]
sample.splice(0,2)
console.log(sample) // [ 3, 4, 5 ]
sample.slice(0,2)
console.log(sample) // [ 3, 4, 5 ]

*/

// TODO: need to declare winners and losers from a state refresh perspective here

const InitiateBattleButton = (props) => {
  const { playerOne, playerTwo } = props;
  const dispatch = useDispatch();

  const playerOneWinsConflict = (playerOne, playerTwo) => {
    playerOne.deck.push(playerTwo.deck[0])
    if (playerTwo.deck.length > 1) {
      playerTwo.deck.shift()
      dispatch(increaseNumberOfCards(["playerOne", 1]))
      dispatch(decreaseNumberOfCards(["playerTwo", 1]))
    } else {
      // TODO: hit endpoint to log a win / loss -> record that in the database
    }
  }

  const playerTwoWinsConflict = (playerOne, playerTwo) => {
    playerTwo.deck.push(playerOne.deck[0])
    if (playerOne.deck.length > 1) {
      playerOne.deck.shift()
      dispatch(increaseNumberOfCards(["playerTwo", 1]))
      dispatch(decreaseNumberOfCards(["playerOne", 1]))
    } else {
      // TODO: hit endpoint to log a win / loss -> record that in the database
    }
  }

  const battle = (playerOne, playerTwo) => {
    if (card_value_map[playerOne.deck[0]] === card_value_map[playerTwo.deck[0]]) {
      // TODO: this should trigger some cool animation
      war(playerOne, playerTwo)
    } else if(card_value_map[playerOne.deck[0]] > card_value_map[playerTwo.deck[0]]) {
      console.log('player 1 wins the battle')
      playerOneWinsConflict(playerOne, playerTwo);
    } else {
      console.log('player 2 wins the battle')
      playerTwoWinsConflict(playerOne, playerTwo);
    }
  }

  /*

  function test(jack = [], joe = []) {
    if (jack.length !== 0 && joe.length !== 0) {
        console.log(jack, joe)
        return
      }
      jack.push("hi")
      joe.push("bye")
      test(jack, joe)
  }

  test() // [ 'hi' ] [ 'bye' ]

  */

  // proves hoisting exists by defining `initiateWar` after it is invoked
  const war = (playerOne, playerTwo, playerOnePotentialSpoils = [], playerTwoPotentialSpoils = [], counter = 0) => {
    console.log('war initiated')
    // Base case: if a player has less than 3 cards to draw then they lose
    if(playerOne.deck.lenth < 3) {
      // TODO: hit endpoint to log a win / loss -> record that in the database
    } else if(playerTwo.deck.lenth < 3) {
      // TODO: hit endpoint to log a win / loss -> record that in the database
    } else {

      const playerOneDrawnCards = playerOne.deck.slice(0 + (counter * 3), 3 + (counter * 3));
      const playerTwoDrawnCards = playerTwo.deck.slice(0 + (counter * 3), 3 + (counter * 3));

      playerOnePotentialSpoils.push(playerOneDrawnCards)
      playerTwoPotentialSpoils.push(playerTwoDrawnCards)

      if (card_value_map[playerOneDrawnCards[0]] === card_value_map[playerTwoDrawnCards[0]]) {
        // this should trigger some cool animation
        war(playerOne, playerTwo, playerOnePotentialSpoils, playerTwoPotentialSpoils, counter += 1)

      } else if(card_value_map[playerOneDrawnCards[0]] > card_value_map[playerTwoDrawnCards[0]]) {
        console.log('player 1 wins the war')
        dispatch(increaseNumberOfCards(["playerOne", 3 + (counter * 3)]))
        dispatch(decreaseNumberOfCards(["playerTwo", 3 + (counter * 3)]))
        playerOne.deck.push(playerTwoPotentialSpoils)
        if (playerTwo.deck.length > 3) {
          playerTwo.deck.splice(0,3);
        } else {
          // TODO: hit endpoint to log a win / loss -> record that in the database
        }
      } else {
        console.log('player 2 wins the war')
        dispatch(increaseNumberOfCards(["playerTwo", 3 + (counter * 3)]))
        dispatch(decreaseNumberOfCards(["playerOne", 3 + (counter * 3)]))
        playerTwo.deck.push(playerOnePotentialSpoils)
        if (playerOne.deck.length > 3) {
          playerOne.deck.splice(0,3);
        } else {
          // TODO: hit endpoint to log a win / loss -> record that in the database
        }
      }

    }
  }

  return(
    <button onClick={() => battle(playerOne, playerTwo)}> Initiate Battle </button>
  );
}

export default InitiateBattleButton;
