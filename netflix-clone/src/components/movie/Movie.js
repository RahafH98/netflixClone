import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ModalMovie from "../modalMovie/ModalMovie";

function Movie(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const imgCard = `https://image.tmdb.org/t/p/w500${props.data.poster_path}`;

  return (
    <>
      <Card className="mainCard" id="ca">
        <Card.Img variant="top" src={imgCard} className="cardImg" />
        <Card.Body className="cardB">
          <Card.Title>{props.data.title}</Card.Title>
          <Button
            className="buttonModal"
            onClick={handleShow}
            style={{ backgroundColor: "rgb(59, 72, 22)", border: "solid " }}
          >
            Show Modal
          </Button>
        </Card.Body>
      </Card>

      <ModalMovie
        commentHandler={props.commentHandler}
        modalData={props.data}
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
      />
    </>
  );
}

export default Movie;