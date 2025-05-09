const DeleteGameItem = ({ item, onRemoveItem }) => {
  return (
    <button onClick={() => {
      console.log(`Removing game: ${item.name}`);
      onRemoveItem(item);
    }}>
      Delete
    </button>
  );
};

export default DeleteGameItem;
