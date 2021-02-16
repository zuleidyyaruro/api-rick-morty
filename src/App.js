
import Navbar from "./components/Navbar";
import {useState } from "react";
import './App.css';

import SearchBox from "./components/SearchBox";
import LocationContainer from "./components/LocationContainer";


function App() {

  // variable de estado para almacenar el id que el usuario digita en el input
  const [id, setId] = useState("");

  // este handle se envia por medio de props en el searchbox y allá mismo se ejecuta
  const handleSearchLocation = (value) => {
    setId(value);
  }

  return (
    <div className="App">

      <Navbar/>
      <SearchBox handleSearch={handleSearchLocation} />
      <LocationContainer id={id}/>

    </div>
  );
}

export default App;
