import React, { useState } from 'react';
import './style.css';
import SongCardLyrics from '../SongCardLyrics';
import { Link } from 'react-router-dom';

import image from '../../images/Better-Call-Saul.jpeg';
function SongCardHeader({ image, title, artist, preview, allSong }) {
  const [showLyr, setShowLyr] = useState(false);
  function handleButtonClick() {
    window.open(allSong, '_blank');
  }
  return (
    <div className="songCardHeaderMain">
      <div className="iconArrow">
        <Link to="/">
          <span className="material-icons">arrow_back</span>
        </Link>
      </div>

      <div className="song-card-header ">
        <div className="song-image-container">
          <img src={image} alt="artist" className="image-song" />
        </div>

        <div className="song-details">
          <div>
            <h2 className="song-title">{title}</h2>
            <h3 className="song-artist">{artist}</h3>
          </div>

          <div className="allSong-button-container">
            <button
              className="glow-on-hover"
              onClick={() => setShowLyr(!showLyr)}
            >
              Lyrics
            </button>
            <button className="glow-on-hover" onClick={handleButtonClick}>
              Full Song
            </button>
          </div>
        </div>

        <div className="audio-control">
          <audio controls className="audio">
            <source src={preview} type="audio/mpeg"></source>
          </audio>
        </div>
      </div>
      {showLyr && (
        <SongCardLyrics
          showLyr={showLyr}
          setShowLyr={setShowLyr}
          title={title}
          artist={artist}
        />
      )}
    </div>
  );
}
export default SongCardHeader;
