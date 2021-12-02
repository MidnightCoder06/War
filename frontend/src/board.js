import React, { useEffect } from 'react';
import { Dealer, Player }

import InitiateBattleButton from './buttons/initiateBattleButton';
import RestartButton from './buttons/restartButton';
import StartButton from './buttons/startButton';

const Board = () => {

  useEffect(() => {
    // `gameStarted` property comes from the redux store
    if (gameStarted) {
      let dealer = Dealer()
      dealer.shuffleDeck()
      let playerReadyDeck = dealer.partitionDeck()
      let player1 = Player(playerReadyDeck[0], "player one")
      let player2 = Player(playerReadyDeck[1], "player two")
    }
  },[]);

  // `battle initiated` property comes from the redux store
  render (
    <>
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
    </>
  );
}

export default Board
