import React from 'react';
import { initiateWar } from './war';

export const battle = (playerOne, playerTwo) => {
  if (playerOne.deck[0] === playerTwo.deck[0]) {
    // this should trigger some cool animation
    initiateWar(cardOne, cardTwo)
  } else {
    // if someone wins / loses record that in the database
    // do all the game logic here.
    // initiateWar can call battle? Possible circular depednency?
    console.log('initiated battle')
  }
}
