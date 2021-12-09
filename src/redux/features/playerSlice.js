import  { createSlice } from '@reduxjs/toolkit'

const initialStateValue = { "playerOne": { numberOfCardsInDeck: 26, winner: false }, "playerTwo": { numberOfCardsInDeck: 26, winner: false } }

export const playerSlice = createSlice({
  name: 'players',
  initialState: { value: initialStateValue },
  reducers: {
    increaseNumberOfCards: (state, action) => {
      const player_id = action.payload[0]
      const delta = action.payload[1]
      state.value[player_id].numberOfCardsInDeck += delta
    },
    decreaseNumberOfCards: (state, action) => {
      const player_id = action.payload[0]
      const delta = action.payload[1]
      state.value[player_id].numberOfCardsInDeck -= delta
    },
    restartGame: (state, action) => {
      state.value = initialStateValue
    },
    playerWins: (state, action) => {
      state.value[action.payload] = true
    },
  },
})

export const { increaseNumberOfCards, decreaseNumberOfCards, restartGame, playerWins } = playerSlice.actions
export default playerSlice.reducer
