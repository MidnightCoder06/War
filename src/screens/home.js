import React from 'react';
import ShowRecordsButton from '../buttons/showRecordsButton';
import StartButton from '../buttons/startButton';
import '../styles/home.css'

const Home = () => {
  return (
    <div className="button-container">
      <ShowRecordsButton />
      <StartButton />
    </div>
  );
}

export default Home;
