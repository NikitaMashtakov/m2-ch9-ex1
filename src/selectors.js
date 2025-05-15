export const selectField = (state) => state.field;
export const selectCurrentPlayer = (state) => state.currentPlayer;
export const selectWinner = (state) => state.gameStatus.winner;
export const selectIsDraw = (state) => state.gameStatus.isDraw;
export const selectIsGameEnded = (state) => state.gameStatus.isGameEnded;
