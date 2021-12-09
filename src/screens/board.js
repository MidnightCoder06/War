import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Dealer, Player } from '../game/participants';

import InitiateBattleButton from '../buttons/initiateBattleButton';
import RestartButton from '../buttons/restartButton';

const Board = () => {

  const playerValuesFromRedux = useSelector((state) => state.players.value)
  console.log('playerValuesFromRedux', playerValuesFromRedux)
  const gameValuesFromRedux = useSelector((state) => state.game.value);
  console.log('gameValuesFromRedux', gameValuesFromRedux)

  // 'Const declarations' require an initialization value.
  // let PlayerOne;
  // let PlayerTwo;
  //   ^ this is react ... don't intialize variables like this assign them below ... use useState instead
  // If you have a call like useState() with nothing between the parens, that’s uninitialized (it’ll be undefined).
  const [playerOne, setPlayerOne] = useState();
  const [playerTwo, setPlayerTwo] = useState();

  // Remember that useEffect only runs after the browser finishes painting.
  useEffect(() => {
    if (gameValuesFromRedux.isGameStarted) {
      const dealer = new Dealer();
      dealer.shuffleDeck();
      const playerReadyDeck = dealer.partitionDeck();
      setPlayerOne(new Player(playerReadyDeck[0], "player one"));
      setPlayerTwo(new Player(playerReadyDeck[1], "player two"));
    }
  },[]);


  /*

  React does not wait to render. Ever.

  React will gladly kick off an asynchronous data fetch in the background,
  but then it will immediately proceed with rendering – whether the data has loaded or not.
  (and you can be almost certain that it will not have loaded yet)

  Components that render async data need to be prepared to render an empty state, at least once.

  Think about what your app should look like before the data is ready. Maybe it’s empty, or maybe it’s a loading spinner, or some fancy skeleton state.

  To embrace the way React works, kick off your data fetch after the first render, inside a useEffect block.

  Just make sure to initialize the state to something that’s the same type as what it’ll eventually be!

  Otherwise errors like Cannot read property 'map' of undefined' when the component tries to render before the data is ready.

  */

  // todo: winner status needs to come from redux
  return (
    <div>
      {playerOne && playerTwo ?
        <>
          <div> Player Turn: {playerOne.myTurn ? playerOne.name : playerTwo.name} </div>
          <div> Player 1 </div>
          <div> card count: {playerOne.deck.cardCount}</div>
          <div> Player 2 </div>
          <div> card count: {playerTwo.deck.cardCount}</div>
          <InitiateBattleButton playerOne={playerOne} playerTwo={playerTwo} />
          <div> Player 1 battle card: { gameValuesFromRedux.isBattleInitiated ? playerOne.deck[0] : '' } </div>
          <div> Player 2 battle card: { gameValuesFromRedux.isBattleInitiated ? playerTwo.deck[1] : '' } </div>
          <div> winner: {playerOne.winner ? playerOne.name : playerTwo.winner ? playerTwo.name : ''} </div>
          <RestartButton />
        </>
        :
        "pending litness"}
    </div>
  );
}

export default Board
