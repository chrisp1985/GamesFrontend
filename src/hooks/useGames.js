import { useReducer, useEffect } from 'react';
import { getAsyncGames, getAsyncGamesTimeout } from '../services/gamesService';
import { getAsyncFakeGames } from '../services/gamesServiceMock';

const gamesReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, isLoading: true, isError: false };
    case 'FETCH_SUCCESS':
      return { ...state, isLoading: false, games: action.payload };
    case 'FETCH_ERROR':
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

const initialState = {
  isLoading: true,
  games: [],
  isError: false,
};

const useGames = () => {
  const [state, dispatch] = useReducer(gamesReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'FETCH_START' });

    getAsyncFakeGames() // Includes a 5 second delay currently. Remove 'Timeout' for instant.
      .then(result => {
        console.log(result.data);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      })
      .catch(() => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, []);

  const removeGame = (item) => {
    const newGames = state.games.filter(game => game.id !== item.id);
    dispatch({ type: 'FETCH_SUCCESS', payload: newGames });
  };

  return {
    ...state,
    removeGame
  };
};

export default useGames;
