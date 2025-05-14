import { fakeGames } from '../mocks/fakeGames';

export const getAsyncFakeGames = () => 
  new Promise((resolve) =>
    setTimeout(() => {
      resolve({ data: fakeGames });
    }, 5000)
  );
