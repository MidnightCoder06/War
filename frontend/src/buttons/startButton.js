import React from 'react';

/*
in html functions are passed as a string
  <button onclick="startGame()"> Start Game! </button>
in jsx functions are passed as an event handler
  <button onclick={startGame}> Start Game! </button>
*/
const StartButton = () => {
  // turns a 'game started' property in the redux store to true
  // history.push or whatever to the board 
  render(
    <button onclick={startGame}> Start Game! </button>
  );
}

export default StartButton
