import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useRef, useState } from "react";

export default function ModalMovie({
  handleShow,
  handleClose,
  show,
  modalData,
  commentHandler,
}) {
  const imgCard = `https://image.tmdb.org/t/p/w500${modalData.poster_path}`;

  const [comment, setComment] = useState("");
  const commentRef = useRef();

  function handleSub(e) {
    e.preventDefault();
    const userComment = commentRef.current.value;
    console.log(commentRef.current.value);
    console.log("modal data", modalData);
    const newMovie = { ...modalData, userComment };
    console.log("new movie", newMovie);
    setComment(userComment);
    commentHandler(newMovie, newMovie.id);
    console.log(comment);
  }

  async function handleAddFav(e) {
    e.preventDefault();
    let url = `${process.env.REACT_APP_DB_URL}/favMovie`;
    let data = {
      t: modalData.title,
      i: imgCard,
      c: modalData.comment,
    };
    console.log("here is the data", data);
    console.log("here is the modalData", modalData);

    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWVmNjg2Y2YwMThhMjRjNDAyN2I2OWI4MDhkMjg5MCIsInN1YiI6IjY0YjdiZWQ5NWFhZGM0MDBmZmI3ZTMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fl06unWdHqR30GLXdbVP_CDkr4Ux48J1-TRneew6X0Y",
        Accept: "application/json",
        "User-Agent": "MyMovieApp/1.0",
      },
      body: JSON.stringify(data),
    });
    let recivedData = await response.json();
    console.log("recived Data", recivedData);
    if (response.status === 201) {
      alert("added successfuly");
    }
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imgCard} className="modalImg" alt="img" />
          <p>{modalData.overview}</p>

          <Form onSubmit={(e) => handleSub(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Add your Comment</Form.Label>
              <Form.Control
                ref={commentRef}
                type="text"
                placeholder=" Please add you comment here"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="buttonM"
              style={{ backgroundColor: "rgb(59, 72, 22)", border: "solid " }}
            >
              Submit
            </Button>
            <Button
              className="buttonModal"
              style={{ backgroundColor: "rgb(59, 72, 22)", border: "solid " }}
              onClick={(e) => handleAddFav(e)}
            >
              ❤
            </Button>
          </Form>

          {modalData.comment ? modalData.comment : "There aren't any comments yet "}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleClose}
            className="buttonM"
            style={{ backgroundColor: "rgb(59, 72, 22)", border: "solid " }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}