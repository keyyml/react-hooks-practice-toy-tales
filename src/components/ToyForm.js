import React, { useState } from "react";

function ToyForm({toyArr, setToyArr}) {

//   const [name, setName] = useState("")
//   const [image, setImage] = useState("")
 

//   const newToy = {
//     name: name,
//     image: image,
//     likes: 0
//   }
//   function handleSubmit(e){
//     e.preventDefault()
//     setToyArr([...toyArr, newToy])
//   }

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    likes: 0
  })

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()

    const newToyObj = {
      ...formData,
      name: formData.name,
      image: formData.image,
      likes: 0
    }

    setToyArr([...toyArr, newToyObj])

  }


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );

}

export default ToyForm;
