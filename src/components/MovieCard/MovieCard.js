import "./MovieCard.css";
import React from "react";
import { Button } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="m-3 shadow rounded overflow-hidden">
      <div className="img_container">
        <img src={movie.show.image.medium} alt={movie.show.name} />

        <div className="img_overlay"></div>

        <div className="overlay_info">
          <div className="duration_info">
            <PlayCircleOutlineIcon />
            <h6 className="mb-0 ps-1">
              {movie.show.runtime ? `${movie.show.runtime} min` : "undetected"}
            </h6>
          </div>
          <div className="d-flex align-items-center">
            <StarIcon style={{ color: "gold" }} />
            <h6 className="mb-0">
              {movie.show.rating.average ? movie.show.rating.average : "0.0"}
            </h6>
          </div>
        </div>
      </div>

      <div className="p-2">
        <h5 className="mb-3">
          {movie.show.name} ({new Date(movie.show.premiered).getFullYear()})
        </h5>
        <Button
          fullWidth
          variant="contained"
          size="small"
          color="info"
          onClick={() => navigate(`/show/${movie.show.id}`)}
        >
          Browse
        </Button>
      </div>
    </div>
  );
};

export default MovieCard;