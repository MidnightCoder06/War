import  { createSlice } from '@reduxjs/toolkit'

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
      state.value.numberOfCardsInDeck -= delta
    },
  },
})

export const { increaseNumberOfCards, decreaseNumberOfCards } = playerSlice.actions
export default playerSlice.reducer
