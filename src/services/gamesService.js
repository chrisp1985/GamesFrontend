import axios from 'axios';

export const getAsyncGamesTimeout = () => 
  new Promise((resolve, reject) =>
    setTimeout(async () => {
      try {
        const response = await axios.get('http://localhost:9092/v1/games/console');
        resolve(response);
      } catch (error) {
        reject(error);
      }
    }, 5000)
  );

export const getAsyncGames = () => axios.get('http://localhost:9092/v1/games/console');
