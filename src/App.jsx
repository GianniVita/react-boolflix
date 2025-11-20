import React from "react"
import SearchBar from "./components/SearchBar"


function App() {
  
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
