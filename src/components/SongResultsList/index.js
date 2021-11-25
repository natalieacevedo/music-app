import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SongResult from '../SongResult';
import './style.css';
function SongResultList(props) {
  const { nameTyped } = props;
  const [songResults, setSongResults] = useState([]);
  function fetchApi() {
    if (nameTyped == '') {
      setSongResults([]);
    } else {
      const apiUrl = `https://api.deezer.com/search/track/autocomplete?limit=15&q=${nameTyped}`;
      axios.get(apiUrl).then((response) => {
        console.log(response.data.data);
        setSongResults(response.data.data);
      });
    }
  }
  useEffect(() => fetchApi(), [nameTyped]);
  return (
    <div className="song-results-holder">
      {songResults.map((song) => (
        <SongResult
          id={song.id}
          title={song.title}
          artist={song.artist.name}
          imgUrl={song.album.cover_small}
        />
      ))}
    </div>
  );
}
export default SongResultList;
