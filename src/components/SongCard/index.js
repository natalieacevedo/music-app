import SongCardHeader from '../SongCardHeader';
import SongCardLyrics from '../SongCardLyrics';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function SongCard() {


  console.log('hola');
  let songId = 3135556
  
  let [loading, setLoading] = useState(true);
  let [songInfo, setSongInfo] = useState([]);

  
  
  function getAllSongInfo() {
    
    setLoading(true);
    axios.get(`https://api.deezer.com/track/${songId}`)
        .then(resp => {
        console.log("getAllSongInfo: " + resp.data)
          setSongInfo(resp.data);
          setLoading(false);

      })
      .catch(err => {
      
        console.error(err);
      });
  }
  
  

  useEffect(() => {
    console.log(`mount`)
    getAllSongInfo()
  }, []);
  
 

  if (loading) {
    return (
      <div>Loading...</div>
    )
  } else {
    return (
      <div>
       
        <SongCardLyrics title= {songInfo.title} artist={songInfo.contributors[0].name} />
        <SongCardHeader image={songInfo.album.cover_big} title= {songInfo.title} artist={songInfo.contributors[0].name} />
      </div>
    );
    
  }


};


export default SongCard;
