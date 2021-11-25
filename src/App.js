import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import SongCard from "./components/SongCard";
import SongCardHeader from "./components/SongCardHeader";
import "./style.css";
function App() {
  return (
    <div>
      <SongCardHeader />
    </div>
    /*
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/songs/:id" element={<SongCard />} />
      </Routes>
    </BrowserRouter>
    */
  );
}

export default App;
