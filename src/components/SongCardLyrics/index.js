import React, { useEffect, useState } from "react";
import "./style.css";
const axios = require("axios");

function SongCardLyrics({ artist, title }) {
  console.log(artist, title);
  const [lyrics, setLyrics] = useState("");

  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(
        `https://api.lyrics.ovh/v1/${artist}/${title}`
      );
      if (resp.data.lyrics.includes("Paroles de la chanson")) {
        const RespData = resp.data.lyrics.slice(22);
        setLyrics(RespData);
      } else {
        setLyrics(resp.data.lyrics);
        console.log(resp.data.lyrics);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (artist) {
      sendGetRequest();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className='lyrics-con'>{lyrics}</div>;
}

export default SongCardLyrics;
