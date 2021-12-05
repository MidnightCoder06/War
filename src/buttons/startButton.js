import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startGame } from '../redux/features/gameSlice';

/*
in html functions are passed as a string
  <button onclick="startGame()"> Start Game! </button>
in jsx functions are passed as an event handler
  <button onclick={startGame}> Start Game! </button>
*/
const StartButton = () => {


  let navigate = useNavigate();
  const dispatch = useDispatch();

  const initializeBoard = () => {
    dispatch(startGame());
    navigate("/board");
  }

  return(
    <button onClick={initializeBoard}> Start Game! </button>
  );
}

export default StartButton
