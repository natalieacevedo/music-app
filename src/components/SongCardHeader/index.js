import React from 'react';
import './style.css';
import image from '../../images/Better-Call-Saul.jpeg';
function SongCardHeader({ image, title, artist, preview, allSong }) {
  function handleButtonClick() {
    window.open(allSong, '_blank');
  }
  return (
    <div className="songCardHeaderMain">
      <div className="iconArrow">
        <span class="material-icons">arrow_back</span>
      </div>
      <div className="song-card">
        <div className="song-image-container">
          <img src={image} alt="Image" className="image-song" />
        </div>
        <div className="song-details">
          <h2 className="song-title">{title}</h2>
          <h3 className="song-artist">{artist}</h3>
        </div>
        <div className="audio-control">
          <audio controls className="audio">
            <source src={preview} type="audio/mpeg"></source>
          </audio>
        </div>
        <div className="allSong-button-container">
          <button className="glow-on-hover" onClick={handleButtonClick}>
            Full Song
          </button>
        </div>
      </div>
    </div>
  );
}
export default SongCardHeader;
