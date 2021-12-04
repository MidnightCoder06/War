import React, { useEffect } from 'react';
import { Dealer, Player } from '../game/participants';

import InitiateBattleButton from '../buttons/initiateBattleButton';
import RestartButton from '../buttons/restartButton';

const Board = () => {

  // useEffect(() => {
  //   // `gameStarted` property comes from the redux store
  //   if (gameStarted) {
  //     const dealer = Dealer()
  //     dealer.shuffleDeck()
  //     const playerReadyDeck = dealer.partitionDeck()
  //     const player1 = Player(playerReadyDeck[0], "player one")
  //     const player2 = Player(playerReadyDeck[1], "player two")
  //   }
  // },[]);

  // `battle initiated` property comes from the redux store
  return (
    <>
      <div> Player 1 </div>
      <div> Player 2 </div>
      {/*
      <div> Player Turn: {player1.myTurn ? player1.name : player2.name} </div>
      <div> Player 1 </div>
      <div> card count: {player1.deck.cardCount}</div>
      <div> Player 2 </div>
      <div> card count: {player2.deck.cardCount}</div>
      <div> winner: {player1.winner ? player1.name : player2.winner ? player2.name : ''} </div>
      <InitiateBattleButton player1={player1} player2={player2} />
      <RestartButton />
      <div> Player 1 battle card: { battle initiated ? player1.deck[0] } </div>
      <div> Player w battle card: { battle initiated ? player2.deck[1] } </div>
      */}
    </>
  );
}

export default Board
