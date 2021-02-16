import {useState } from "react";

const SearchBox = ({ handleSearch }) => {

    const [searchTerm, setSearchTermn] = useState("");

    const onChange = (e) => {
        setSearchTermn(e.target.value);
    }
    
    const onClick = () => {
        handleSearch(searchTerm);
    }

    return (
        <div className=" searchbox-container">
            <div className="search-container-input ">
                <input onChange={onChange} type="text" placeholder="Ingrese el ID de la ubicación que desea buscar" />
            </div>

            <div className=" search-container-btn">
                <button onClick={onClick}>Buscar</button>
            </div>
        </div>
    )
}

export default SearchBox;