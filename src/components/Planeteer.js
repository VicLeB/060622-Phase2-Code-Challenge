import React, {useState} from "react";

function Planeteer({planeteerBio}) {
const [bioDisplay, setBioDisplay] = useState(planeteerBio.bio)

function handleImgClick(){
  bioDisplay === planeteerBio.bio? setBioDisplay(planeteerBio.quote) : setBioDisplay(planeteerBio.bio)
}

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={planeteerBio.pictureUrl}
          alt={planeteerBio.name}
          className="card__image"
          onClick= {handleImgClick}
        />
        <div className="card__content">
          <div className="card__title">{planeteerBio.name}</div>
          <p className="card__text">{bioDisplay}</p>
          <div className="card__detail">
            <p>{planeteerBio.twitter}</p>
            <p>
              {planeteerBio.fromUSA ? "Usa-based": "Working overseas"}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
