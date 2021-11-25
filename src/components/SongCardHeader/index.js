import React from "react";
import "./style.css";
function SongCardHeader() {
  return (
    <div className='songCardHeaderMain'>
      <div className='iconArrow'>
        <span class='material-icons'>arrow_back</span>
      </div>
      <div className='song-image'>
        <image></image>
      </div>
      <div className='song-details'>
        <h2>song title</h2>
        <h3>artist name</h3>
      </div>
      <div className='audio-control'>
        <audio></audio>
      </div>
    </div>
  );
}
export default SongCardHeader;
