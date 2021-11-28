import "./MovieDetails.css";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { MovieList } from "../../App";
import parse from "html-react-parser";
import { Col, Container, Row } from "react-bootstrap";
import { Button, Chip, IconButton, Tooltip } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import DialogForm from "../../components/DialogForm/DialogForm";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieList] = useContext(MovieList);
  const [showDetails, setShowDetails] = useState({});
  const [showFormOpen, setShowFormOpen] = useState(false)

  useEffect(() => {
    const show = movieList.filter((movie) => movie.show.id == id);
    setShowDetails(show[0]?.show);
  }, [id, movieList]);

  return (
    <Container>
      <Row>
        <Col lg="5" className="my-5">
          <img
            src={showDetails?.image?.original}
            alt={showDetails?.name}
            className="w-100 rounded-3"
          />
        </Col>

        <Col lg="7" className="my-5">
          <h1>
            {showDetails?.name}
            <Tooltip title="Official Site">
              <sup>
                <IconButton href={showDetails?.url} target="blank">
                  <LinkIcon />
                </IconButton>
              </sup>
            </Tooltip>
          </h1>

          <div>{parse(showDetails?.summary ? showDetails.summary : "")}</div>

          <div className="mb-3">
            {showDetails?.genres?.map((item, index) => (
              <Chip
                key={index}
                size="small"
                label={item}
                color="primary"
                sx={{ marginRight: 1 }}
              />
            ))}
          </div>

          <p>
            <b>Type: </b>
            {showDetails?.type}
          </p>

          <p>
            <b>Language: </b>
            {showDetails?.language}
          </p>

          <p>
            <b style={{ color: "" }}>Platform: </b>
            {showDetails?.network?.name ? (
              showDetails.network.name
            ) : (
              <span style={{ color: "red" }}>undetected</span>
            )}
          </p>

          <p>
            <b>Ratings: </b>
            {showDetails?.rating?.average ? showDetails.rating.average : "0.0"}
          </p>

          <p>
            <b>Duration: </b>
            {showDetails?.runtime ? (
              `${showDetails.runtime} min`
            ) : (
              <span style={{ color: "red" }}>undetected</span>
            )}
          </p>

          <p>
            <b>Premiered: </b>
            {showDetails?.premiered}
          </p>

          <Button variant="contained" onClick={() => setShowFormOpen(true)}>Buy Ticket</Button>
          
          <DialogForm showDetails={showDetails} showFormOpen={showFormOpen} setShowFormOpen={setShowFormOpen} />
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
