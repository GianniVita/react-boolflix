import React from "react"
import { useEffect } from "react";
import axios from "axios";



function App() {

  //const api_endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${VITE_MOVIE_DB_API_KEY}&${}`

  const api_endpoint = `https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro`

useEffect(() => {
  axios.get(api_endpoint)
    .then((response) =>{
      console.log(response.data);
      
    });

}, []); 

  return (
    <>

      <div>
        <h1 className="">Boolflix</h1>
        <input type="search" />
        <button className="">Cerca i Film</button>
        
      </div>
      
    </>
  );
}

export default App;
