import GamesItem from './GamesItem';

const GamesList = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <GamesItem key={item.id} item={item} onRemoveItem={onRemoveItem} />
    ))}
  </ul>
);

export default GamesList;
