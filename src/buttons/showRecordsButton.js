import React from 'react'
import { useNavigate } from 'react-router-dom';

const ShowRecordsButton = () => {

  let navigate = useNavigate();

  const showWinsLosses = () => {
    console.log('show Wins & Losses');
    navigate('/records');
  }

  return(
    <button onClick={showWinsLosses}> Show Win / Loss Records </button>
  );

}

export default ShowRecordsButton;
