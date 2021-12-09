import  { createSlice } from '@reduxjs/toolkit'

// TODO: add a winner property here for each player, initialized to false
const initialStateValue = { "playerOne": { numberOfCardsInDeck: 26 }, "playerTwo": { numberOfCardsInDeck: 26 } }

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
  },
})

export const { increaseNumberOfCards, decreaseNumberOfCards, restartGame } = playerSlice.actions
export default playerSlice.reducer
