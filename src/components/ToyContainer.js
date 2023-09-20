import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyArr }) {

  const toysToDisplay = toyArr.map((toy) => {
    return <ToyCard key={toy.id} {...toy} /> 
  })

  return (
    <div id="toy-collection">{toysToDisplay}</div>
  );
}

export default ToyContainer;
