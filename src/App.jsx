import './App.css';
import useStorageState from './hooks/useStorageState';
import GamesList from './components/GamesList';
import InputWithLabel from './components/InputWithLabel';
import useGames from './hooks/useGames';
import AboutBlock from './components/AboutBlock';

const App = () => {

  const [searchGamesTerm, setGamesSearchTerm] = useStorageState('gamesSearch', '');

  const { games, isLoading, isError, removeGame } = useGames();

  const handleGamesSearch = (event) => {
    setGamesSearchTerm(event.target.value);
  };

  const searchedGames = games.filter((game) => 
    game.name.toLowerCase().includes(searchGamesTerm.toLowerCase())
  );

  const ErrorText = () => {
  return (
    <>
      <p className="center-align inter-d">Error getting Games. Is the server running?</p>
      <p className='inter-d'>The server, by default, is configured to run locally and try again. To run in S3, the service needs to be deployed to AppRunner and the Axios url
        amended.
      </p>
    </>
  );};

  return (
    <>

      <AboutBlock></AboutBlock>

      <div style={{ marginTop: '5rem' }}>
          <h1>Games Dashboard</h1>

          <InputWithLabel 
            value={searchGamesTerm} 
            onSearch={handleGamesSearch} 
            searchId={'gamesSearch'}>
          <strong>GamesSearch:</strong>
          </InputWithLabel>
      </div>
      <hr />

      {
        isError ? (<ErrorText />) :
        isLoading ? (<p className="center-align">Loading... (artificial 5s timeout running)</p>) : 
        (<GamesList list={searchedGames} onRemoveItem={removeGame}/>)
      }

      <hr />

    </>
  );
};

export default App;
