import SongCardHeader from '../SongCardHeader';
import SongCardLyrics from '../SongCardLyrics';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SongCard() {
  let songId = 3135556;
  let [loading, setLoading] = useState(true);
  let [songInfo, setSongInfo] = useState([]);
  function getAllSongInfo() {
    setLoading(true);
    axios
      .get(`https://api.deezer.com/track/${songId}`)
      .then((resp) => {
        setSongInfo(resp.data);
        setLoading(false);
      })
      .catch((err) => {});
  }
  useEffect(() => {
    getAllSongInfo();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <SongCardLyrics
          title={songInfo.title}
          artist={songInfo.contributors[0].name}
        />
      </div>
    );
  }
}

export default SongCard;
