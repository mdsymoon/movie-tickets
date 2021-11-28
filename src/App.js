import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Bookings from "./pages/Bookings/Bookings";

export const MovieList = createContext();
export const MyBookings = createContext();

function App() {
  const [movieList, setMovieList] = useState([]);
  const [myBookings, setMyBookings] = useState([]);

  useEffect(() => {
    let bookings = localStorage.getItem("bookings");
    if (bookings) {
      bookings = JSON.parse(bookings);
      setMyBookings(bookings);
    }
  }, []);

  return (
    <MovieList.Provider value={[movieList, setMovieList]}>
      <MyBookings.Provider value={[myBookings, setMyBookings]}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/show/:id" element={<MovieDetails />} />
            <Route path="/bookings" element={<Bookings />} />
          </Routes>
        </Router>
      </MyBookings.Provider>
    </MovieList.Provider>
  );
}

export default App;
