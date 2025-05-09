import { initialGames } from '../data/games';

export const getAsyncGames = () => new Promise((resolve) =>
  setTimeout(() => resolve({ data: { games: initialGames } }), 5000)
);