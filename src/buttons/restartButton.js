import React from 'react';
import { useDispatch } from 'react-redux';
import { restartGame } from '../redux/features/playerSlice';

const RestartButton = () => {
  const dispatch = useDispatch();

  const restart = () => {
    console.log('restart game')
    dispatch(restartGame());
  }

  return(
    <button onClick={() => restart()}> Start over </button>
  );
}

export default RestartButton;
