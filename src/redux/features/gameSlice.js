import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = { isGameStarted: false, isBattleInitiated: false, isWarInitiated: false }

export const gameSlice = createSlice({
  name: 'game',
  initialState: { value: initialStateValue },
  reducers: {
    startGame: (state, action) => {
      state.value.isGameStarted = true
    },
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

export const { startGame, restartGame, initiateBattle, initiateWar } = gameSlice.actions
export default gameSlice.reducer
