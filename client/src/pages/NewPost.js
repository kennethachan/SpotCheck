import React from "react"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import "./NewPost.css"

const URL = "http://localhost:3001"

function NewPost({ profile }) {
  let navigate = useNavigate()
  const [boroughs, setBoroughs] = useState([])
  const [formValues, setFormValues] = useState({
    name: "",
    image: "",
    description: "",
    address: "",
    bustLevel: "",
    profileId: profile.id,
    boroughId: "",
  })

  useEffect(() => {
    getBoroughs()
  }, [])

  const getBoroughs = async () => {
    let res = await axios.get(`${URL}/api/boroughs/get-boroughs`)
    console.log(res.data)
    setBoroughs(res.data)
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let data = {
      name: formValues.name,
      image: formValues.image,
      description: formValues.description,
      address: formValues.address,
      bustLevel: formValues.bustLevel,
      profileId: profile.id,
      boroughId: formValues.boroughId,
    }

    const newPost = await axios
      .post(`${URL}/api/posts/new-post`, data)
      .then((res) => {
        console.log(res.data)
      })

    setFormValues({
      name: "",
      image: "",
      description: "",
      address: "",
      bustLevel: "",
      profileId: profile.id,
      boroughId: "",
    })

    navigate("/feed")
  }

  return (
    <div className="createProfileBody">
      <form className="new-post-form" onSubmit={handleSubmit}>
        <h2>What Did You Find ?</h2>
        <div className="input-wrapper">
          <input
            className="input"
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Spot Name"
            value={formValues.name}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            className="input"
            onChange={handleChange}
            name="image"
            type="text"
            placeholder="Image URL"
            value={formValues.image}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            className="input"
            onChange={handleChange}
            name="description"
            type="text"
            placeholder="Description"
            value={formValues.description}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            className="input"
            onChange={handleChange}
            name="address"
            type="text"
            placeholder="Address"
            value={formValues.address}
            required
          />
        </div>
        <div className="input-wrapper">
          <select
            className="bustlevel"
            defaultValue={formValues.bustLevel}
            onChange={handleChange}
            name="bustLevel"
            required
          >
            <option value="" disabled hidden>
              Bust Level
            </option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="input-wrapper">
          <select
            className="bustlevel"
            defaultValue={formValues.boroughId}
            onChange={handleChange}
            name="boroughId"
            required
          >
            <option value="" disabled hidden>
              Borough
            </option>
            {boroughs.map((borough) => (
              <option key={borough.id} value={borough.id}>
                {borough.name}
              </option>
            ))}
          </select>
        </div>
        <button className="new-post-btn" disabled={!formValues.name}>
          Post
        </button>
      </form>
    </div>
  )
}

export default NewPost
