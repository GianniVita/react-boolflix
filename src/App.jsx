import React from "react"
import SearchBar from "./components/SearchBar"


function App() {

  const api_endpoint = 'https://api.themoviedb.org/3/search/movie?api_key='

  const [search, setSearch] = useState()

  return (
    <>

      <div>
        <h1 className="">Boolflix</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      
    </>
  )
}

export default App
