import { useState } from 'react';
import SearchBar from '../SearchBar';
import SongResultsList from '../SongResultsList';
function SearchPage() {
  const [nameTyped, setNameTyped] = useState('');
  function handleInputChange(e) {
    setNameTyped(e.target.value);
  }
  return (
    <div className="searchPage">
      <SearchBar
        nameTyped={nameTyped}
        setNameTyped={setNameTyped}
        handleInputChange={handleInputChange}
      />
      <SongResultsList nameTyped={nameTyped} />
    </div>
  );
}
export default SearchPage;
