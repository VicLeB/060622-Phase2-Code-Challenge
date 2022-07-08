import React, {useEffect, useState} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";


function App() {
  const [planeteersBio, setPlaneteersBio] = useState([])
  const [searchPlaneteer, setSearchPlaneteer] = useState('')

  function handleSearch(event){
    setSearchPlaneteer(event.target.value)
  }

  const searchedPlaneteers = planeteersBio.filter((planeteerBio)=>{
    return planeteerBio.name.toLowerCase().includes(searchPlaneteer) || planeteerBio.bio.toLowerCase().includes(searchPlaneteer)
  })


  useEffect(()=> {
    fetch(' http://localhost:8003/planeteers')
    .then(res => res.json())
    .then(planeteerData => setPlaneteersBio(planeteerData))
  },[])

  return (
    <div>
      <Header />
      <SearchBar searchPlaneteer={searchPlaneteer} handleSearch={handleSearch}/>
      <RandomButton />
      <PlaneteersContainer planeteersBio={searchedPlaneteers}/>
    </div>
  );
}

export default App;
