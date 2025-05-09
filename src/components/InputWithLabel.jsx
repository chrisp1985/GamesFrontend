const InputWithLabel = ({ value, onSearch, searchId, type, children }) => (
  <>
    <label htmlFor={searchId}>{children || 'Search:'}</label>
    <input
      id={searchId}
      type={type || 'text'}
      value={value}
      onChange={onSearch}
    />
  </>
);

export default InputWithLabel;
