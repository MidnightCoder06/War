
// playerOne has cardOne and same with playerTwo
// if someone wins / loses record that in the database
export const compareCards = (cardOne, cardTwo) => {
  if (cardOne.value === cardTwo.value) {
    // this should trigger some cool animation 
    initiateWar(cardOne, cardTwo)
  } else if (cardOne.value > cardTwo.value) {

  } else {

  }
}
