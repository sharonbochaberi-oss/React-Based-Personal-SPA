import { useRef } from "react";

function SearchBar({ setSearchTerm }) {
  const inputRef = useRef();

  const handleChange = () => {
    setSearchTerm(inputRef.current.value);
  };

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search products..."
      onChange={handleChange}
    />
  );
}

export default SearchBar;