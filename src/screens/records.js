import React, { useState, useEffect } from 'react';

const Records = () => {

  const [recordsData, setRecordsData] = useState({});

  useEffect(() => {
    // call records api
  }, []);


  return (
    <div>
      {
        recordsData ?
        <>
          <div> Player One Wins: {recordsData.playerOneWins} </div>
          <div> Player One Losses: {recordsData.playerOneLosses} </div>
          <div> Player Two Wins: {recordsData.playerTwoWins} </div>
          <div> Player Two Losses: {recordsData.playerTwoLosses} </div>
        </>
        :
        "pending records data"
      }
    </div>
  );
}

export default Records;
