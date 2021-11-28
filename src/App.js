import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Bookings from "./pages/Bookings/Bookings";

export const MovieList = createContext();

function App() {
  const [movieList, setMovieList] = useState([]);

  return (
    <MovieList.Provider value={[movieList, setMovieList]}>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </Router>
    </MovieList.Provider>
  );
}

export default App;
