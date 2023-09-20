import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const [toyArr, setToyArr] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(resp => resp.json())
      .then(data => setToyArr(data))
  }, [])
  // console.log(toyArr)
  return (
    <>
      <Header />
      {showForm ? <ToyForm toyArr={toyArr} setToyArr={setToyArr} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyArr={toyArr} />
    </>
  );
}

export default App;
