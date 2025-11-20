import React from "react"
import SearchBar from "./components/SearchBar"


function App() {

  const api_endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${VITE_MOVIE_DB_API_KEY}&${}`

 

  return (
    <>

      <div>
        <h1 className="">Boolflix</h1>
        <input type="search" />
        <button className="">Cerca i Film</button>
        
      </div>
      
    </>
  )
}

export default App
