import React from "react";
import "./App.css";
// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
  const apiKey = "5b893806";
  const [movie, setMovie] = React.useState(null);

  //function to get Movie
  const getMovie = async (searchTerm) =>{
      const response = await fetch( `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      const data = await response.json();
      setMovie(data);
  }
  // USE OUR COMPONENTS IN APPs RETURNED JSX
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
