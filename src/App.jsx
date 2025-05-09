import './App.css';
import useStorageState from './hooks/useStorageState';
import GamesList from './components/GamesList';
import InputWithLabel from './components/InputWithLabel';
import useGames from './hooks/useGames';

const App = () => {

  const [searchGamesTerm, setGamesSearchTerm] = useStorageState('gamesSearch', '');

  const { games, isLoading, isError, removeGame } = useGames();

  const handleGamesSearch = (event) => {
    setGamesSearchTerm(event.target.value);
  };

  const searchedGames = games.filter((game) => 
    game.name.toLowerCase().includes(searchGamesTerm.toLowerCase())
  );

  return (
    <>
      <h1>Games Dashboard</h1>

      <InputWithLabel 
        value={searchGamesTerm} 
        onSearch={handleGamesSearch} 
        searchId={'gamesSearch'}>
      <strong>GamesSearch:</strong>
      </InputWithLabel>

      <hr />

      {
        isError ? (<p>Error getting Games. Is the server running?</p>) :
        isLoading ? (<p>Loading... (artificial 5s timeout running)</p>) : 
        (<GamesList list={searchedGames} onRemoveItem={removeGame}/>)
      }

      <hr />

    </>
  );
};

export default App;
