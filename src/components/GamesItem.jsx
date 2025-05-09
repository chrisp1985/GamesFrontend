import DeleteGameItem from './DeleteGameItem';

const GamesItem = ({ item, onRemoveItem }) => (
  <li>
    <span><strong>{item.name}</strong>
    </span>
    <span><i>{item.console}</i></span>
    <span>{item.rating}</span>
    <DeleteGameItem item={item} onRemoveItem={onRemoveItem} />
  </li>
);

export default GamesItem;
