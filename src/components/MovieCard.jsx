import React from 'react'

function MovieCard({movie}) {
  return (
    <div style={{display:"flex",gap:"10px", flexDirection:"column",alignItems:"center",border:"4px solid gray",borderRadius:"10px", padding:"10px", margin:"10px"}}>
    <h1>Title : {movie.title}</h1>
    <img style={{height:"300px"}} src={movie.posterURL} alt="poster" />
    <p style={{fontSize:"17px"}}>Description : {movie.description}</p>
    <p style={{fontSize:"20px",fontWeight:"bold",color:"red"}}>Rating : {movie.rating}</p>
    </div>
  )
}

export default MovieCard