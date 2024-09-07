import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import appAxios from "../utils/axiosConfig";

function AddMovie({ movies, setMovies }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const posterURLRef = useRef();
  const ratingRef = useRef();

  

  function postMovie(e) {
    e.preventDefault();
    const newMovie = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      posterURL: posterURLRef.current.value,
      rating: ratingRef.current.value,
    };
    appAxios
      .post("/movies", newMovie)
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
          setMovies([...movies, response.data]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      titleRef.current.value = "";
      descriptionRef.current.value = "";
      posterURLRef.current.value = "";
      ratingRef.current.value = "";
  }

  return (
    <Form
      onSubmit={postMovie}
      style={{
        display: "grid",
        width: "80%",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "10px",
        backgroundColor: "rgba(173, 173, 173, 0.11",
      }}
    >
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Title</Form.Label>
          <Form.Control ref={titleRef} type="text" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control ref={descriptionRef} type="text" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>PosterURL</Form.Label>
          <Form.Control ref={posterURLRef} type="text" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Rating</Form.Label>
          <Form.Control ref={ratingRef} type="number" min="0" max="10" step="0.1" />
        </Form.Group>
      </Row>

      <Button
        style={{ width: "50%", justifySelf: "center" }}
        variant="success"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
}

export default AddMovie;
