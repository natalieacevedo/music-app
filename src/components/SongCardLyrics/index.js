import React, { useEffect, useState } from "react";
import "./style.css";
const axios = require("axios");

function SongCardLyrics({ artist, title }) {
  const [lyrics, setLyrics] = useState("");

  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(
        `https://api.lyrics.ovh/v1/Adele/someone like you`
      );
      const RespData = resp.data.lyrics.slice(22);
      setLyrics(RespData);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  // console.log("hi");

  useEffect(() => {
    sendGetRequest();
  }, []);

  return <div className='lyrics-con'>{lyrics}</div>;
}

export default SongCardLyrics;
