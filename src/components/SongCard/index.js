import SongCardLyrics from "../SongCardLyrics";
import SongCardHeader from "../SongCardHeader";
import Album from "../Album";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SongCard() {
  let songId = useParams().id;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <SongCardHeader
          image={songInfo.album.cover_big}
          title={songInfo.title}
          artist={songInfo.contributors[0].name}
          preview={songInfo.preview}
          allSong={songInfo.link}
        />
        <Album albumId={songInfo.album.id} />
      </div>
    );
  }
}

export default SongCard;
