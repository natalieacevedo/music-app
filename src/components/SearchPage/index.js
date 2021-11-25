import React from "react";
import { useState } from "react";
import SearchBar from "../SearchBar";
import video from "../../assets/videos/background_video.mp4";
function SearchPage() {
  const [nameTyped, setNameTyped] = useState("");
  function handleInputChange(e) {
    setNameTyped(e.target.value);
  }
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
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
      <SearchBar
        nameTyped={nameTyped}
        setNameTyped={setNameTyped}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}
export default SearchPage;
