import "./Home.css";
import React, { useContext, useEffect } from "react";
import { MovieList } from "../../App";
import { Container } from "react-bootstrap";
import MovieCard from "../../components/MovieCard/MovieCard";

const Home = () => {
  const [movieList, setMovieList] = useContext(MovieList);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovieList(data));
  });

  return (
    <Container>
      <div className="d-flex flex-wrap justify-content-evenly">
          {movieList.map((movie) => (
            <MovieCard key={movie.show.id} movie={movie} />
          ))}
      </div>
    </Container>
  );
};

export default Home;
