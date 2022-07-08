import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({planeteersBio}) {

  const planeteerBioCards = planeteersBio.map((planeteerBio) =>{
    return <Planeteer key={planeteerBio.id} planeteerBio={planeteerBio} />
  })

  return (
    <ul className="cards">
      {planeteerBioCards}
    </ul>
  );
}

export default PlaneteersContainer;
