import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage/";
import SongCard from "./components/SongCard";

import "./style.css";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path='/'
          element={
            <div className=''>
              <SearchPage />
              <SongCard />
            </div>
          }
        />
        <Route path='/songs/:id' element={<SongCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
