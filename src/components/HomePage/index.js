import React from "react";
import { useState } from "react";
import SearchBar from "../SearchBar";
import video from "../../assets/videos/background_video.mp4";
import "./style.css";
function SearchPage() {
  const [nameTyped, setNameTyped] = useState("");
  function handleInputChange(e) {
    setNameTyped(e.target.value);
  }
  return (
    <div className="homePage">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div>
        <SearchBar
          nameTyped={nameTyped}
          setNameTyped={setNameTyped}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}
export default SearchPage;
