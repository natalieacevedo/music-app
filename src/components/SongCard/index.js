import SongCardHeader from '../SongCardHeader';
import SongCardLyrics from '../SongCardLyrics';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function SongCard() {

  console.log('hola');
  let songId = 3135556
  
  let [songInfo, setSongInfo] = useState([]);

  
  // };
  function getAllSongInfo() {
    // axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${songId}`)
      axios.get(`https://api.deezer.com/track/${songId}`)
      .then(resp => {
       // console.log(resp.data);
        setSongInfo(resp.data);

      })
      .catch(err => {
        // Handle Error Here
        console.error(err);
      });
  }
  
  // getAllSongInfo();

  useEffect(() => {
    console.log(`mount`)
    getAllSongInfo()
  }, []);

  // let artistName = songInfo.contributors[0].name;
  // console.log(artistName);
 // console.log(songInfo.contributors[0].name);
  //console.log(songInfo.contributors[0].name);
  
  console.log(songInfo.title);

return (
  <div>
    <SongCardHeader  />
    <SongCardLyrics title= {songInfo.title} artist={songInfo.contributors[0].name} />
    
  </div>
);


};


export default SongCard;
