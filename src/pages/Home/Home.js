import "./Home.css";
import React, { useContext, useEffect } from "react";
import { MovieList } from "../../App";
import { Container } from "react-bootstrap";

const Home = () => {
  const [movieList, setMovieList] = useContext(MovieList);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovieList(data));
  });

  return (
    <Container>
      {
          movieList.map((movie) =>
          <div>
              {movie.show.name}
          </div>
          )
      }
    </Container>
  );
};

export default Home;
