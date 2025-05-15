import './output.css';
import useStorageState from './hooks/useStorageState';
import GamesList from './components/GamesList';
import InputWithLabel from './components/InputWithLabel';
import useGames from './hooks/useGames';
import AboutBlock from './components/AboutBlock';
import GamesSearch from './components/GamesSearch';

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

      <AboutBlock />
      <GamesSearch />
      <br />
      <div>
          <InputWithLabel 
            value={searchGamesTerm} 
            onSearch={handleGamesSearch} 
            searchId={'gamesSearch'}>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-black sm:text-[42px] lg:text-[40px] xl:text-5xl">
                Games Search Function
            </h1>
          </InputWithLabel>
      </div>
      <hr />

      {
        isError ? (<ErrorText />) :
        isLoading ? (<p>Loading... (artificial 5s timeout running)</p>) : 
        (<GamesList list={searchedGames} onRemoveItem={removeGame}/>)
      }

      <hr />

    </>
  );
};

export default App;
