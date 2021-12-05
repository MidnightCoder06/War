import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = { isGameStarted: true, isBattleInitiated: true, isWarInitiated: false }

export const gameSlice = createSlice({
  name: 'game',
  initialState: { value: initialStateValue },
  reducers: {
    restartGame: (state, action) => {
      state.value = initialStateValue
    },
    initiateBattle: (state, action) => {
      state.value.isBattleInitiated = true
    },
    initiateWar: (state, action) => {
      state.value.isWarInitiated = true
    },
  },
});

export const { restartGame, initiateBattle, initiateWar } = gameSlice.actions
export default gameSlice.reducer
