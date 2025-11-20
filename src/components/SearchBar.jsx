import { useState } from "react";

const SearchBar = ({ onSearch}) => {
    const[query, setQuery] = useState();

    const handleInputChange = (e) => {
        setQuery(e.trget.value);
    };

    const handleSearch = () => {
        if(onSearch) {
           onSearch(query);
        } 
    };

    return (

        <div className="">
            <input type="text" 
            className=""
            placeholder="Cerca un film.."
            value={query}
            onChange={handleInputChange}
            />
            <button className="" onClick={handleSearch}></button>
        </div>



    )

}