import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import appAxios from "./utils/axiosConfig";
import Filter from "./components/Filter";

function App() {
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(0);
  const [search, setSearch] = useState("");
  //fetch data
  useEffect(() => {
    appAxios
      .get("/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar movies={movies} setMovies={setMovies} setSearch={setSearch} setRating={setRating} />
      <div className="movie-card">
        <Filter movies={movies} search={search} rating={rating} />
      </div>
    </>
  );
}

export default App;
