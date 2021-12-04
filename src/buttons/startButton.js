import React from 'react';
import { useNavigate } from 'react-router-dom';

/*
in html functions are passed as a string
  <button onclick="startGame()"> Start Game! </button>
in jsx functions are passed as an event handler
  <button onclick={startGame}> Start Game! </button>
*/
const StartButton = () => {
  // turns a 'game started' property in the redux store to true

  let navigate = useNavigate();

  const startGame = () => {
    console.log('start game');
  }

  return(
    <button onClick={startGame}> Start Game! </button>
  );
}

export default StartButton
