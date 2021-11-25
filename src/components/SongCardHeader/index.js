import React from "react";
import "./style.css";
import image from "../../images/Better-Call-Saul.jpeg";
function SongCardHeader() {
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
          <h2>song title</h2>
          <h3>artist name</h3>
        </div>
        <div className="audio-control">
          <audio></audio>
        </div>
      </div>
    </div>
  );
}
export default SongCardHeader;
