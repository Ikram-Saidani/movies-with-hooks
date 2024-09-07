import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MovieCard from './MovieCard'
import { useState } from 'react';

function MovieList({movie}) {
  const [show, setShow] = useState(false);
  return (
    <>
    <Card className='card' style={{ width:'16rem' }}>
      <Card.Img style={{height:'300px', borderRadius:'20px', objectFit:'cover'}} variant="top" src={movie.posterURL} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        
        <Button variant="danger" onClick={()=>{setShow(!show)}}>Read more</Button>
      </Card.Body>
    </Card>

    {show && <MovieCard movie={movie}/>}
    </>
  )
}

export default MovieList