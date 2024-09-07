import React, { useState } from "react";
import { Col, Form, Nav, Navbar, Row } from "react-bootstrap";
import AddMovie from "./AddMovie";

function NavBar({ movies, setMovies, setSearch, setRating }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar
        expand="lg"
        bg="light"
        className="bg-body-tertiary justify-content-around"
      >
        <Nav.Link style={{ marginLeft: "50%" }} href="/movies">
          All Movies
        </Nav.Link>
        <Nav.Link onClick={() => setShow(!show)}>Add Movie</Nav.Link>
        <Form inline>
          <Row>
            <Col xs="6">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
            <Col xs="4">
              <Form.Control
                type="number"
                placeholder="Rating"
                min={0}
                max={10}
                step={0.1}
                className=" mr-sm-2"
                onChange={(e) => setRating(e.target.value)}
              />
            </Col>
          </Row>
        </Form>
      </Navbar>
      {show && <AddMovie movies={movies} setMovies={setMovies} />}
    </>
  );
}

export default NavBar;
