import { PLAYERS, WIN_PATTERNS } from './constants';

const initialState = {
  field: Array(9).fill(null),
  currentPlayer: PLAYERS.CROSS,
  gameStatus: { winner: null, isDraw: false, isGameEnded: false },
};

export const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_GAME_STATE': {
      if (state.field[payload.index] === null && !state.isGameEnded) {
        const newField = state.field.slice();
        newField[payload.index] = state.currentPlayer;

        const newGameStatus = { winner: null, isGameEnded: false, isDraw: false };

        WIN_PATTERNS.forEach((pattern) => {
          const [a, b, c] = pattern;
          if (newField[a] && newField[a] === newField[b] && newField[a] === newField[c]) {
            newGameStatus.isGameEnded = true;
            newGameStatus.winner = newField[a];
          }
        });

        if (!newGameStatus.winner && newField.every((value) => value !== null)) {
          newGameStatus.isGameEnded = true;
          newGameStatus.isDraw = true;
        }

        const newState = { ...state, field: newField, gameStatus: newGameStatus };

        if (!newGameStatus.winner) {
          newState.currentPlayer =
            state.currentPlayer === PLAYERS.CROSS ? PLAYERS.NOUGHT : PLAYERS.CROSS;
        }
        return newState;
      } else return;
    }

    case 'RESET_GAME':
      return initialState;

    default:
      return state;
  }
};
