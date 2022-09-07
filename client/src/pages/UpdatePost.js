import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { confirm } from "react-confirm-box"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import "./UpdatePost.css"

const URL = "http://localhost:3001"

function UpdatePost({ profile }) {
  console.log(profile.id)
  let { postId } = useParams()
  let navigate = useNavigate()

  const [spot, setSpot] = useState([])
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
    getSpot()
    getBoroughs()
  }, [])

  const getSpot = async () => {
    const res = await axios.get(`${URL}/api/posts/${postId}`)
    console.log(res.data.post)
    setSpot(res.data.post)
  }

  const getBoroughs = async () => {
    let res = await axios.get(`${URL}/api/boroughs/get-boroughs`)
    console.log(res.data)
    setBoroughs(res.data)
  }

  const deletePost = async () => {
    const confirmDelete = await confirm(
      "Are you sure you want to delete your post?"
    )
    if (confirmDelete) {
      console.log("user clicked yes")
      const res = await axios
        .delete(`${URL}/api/posts/${postId}`)
        .then((res) => {
          console.log(res)
          navigate("/profile")
        })
    } else {
      console.log("user clicked no")
    }
  }

  const updatePost = async (data) => {
    const res = await axios
      .put(`${URL}/api/posts/${postId}`, {
        name: data.name,
        image: data.image,
        description: data.description,
        address: data.address,
        bustLevel: data.bustLevel,
        profileId: data.profileId,
        boroughId: data.boroughId,
      })

      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => console.log(error))
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

    updatePost(data)

    setFormValues({
      name: "",
      image: "",
      description: "",
      address: "",
      bustLevel: "",
      profileId: profile.id,
      boroughId: "",
    })

    navigate("/profile")
  }

  return (
    <div>
      <div className="post-details-container">
        <div>
          <img className="spotdetail-image" src={spot.image}></img>
        </div>
        <form className="update-post-form" onSubmit={handleSubmit}>
          <h3 className="update-post-title">Update Your Post!</h3>
          <div className="input-wrapper">
            <input
              className="update-input"
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
              className="update-input"
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
              className="update-input"
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
              className="update-input"
              onChange={handleChange}
              name="address"
              type="text"
              placeholder="Address"
              value={formValues.address}
              required
            />
          </div>

          <div className="dropdown-menus">
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
          </div>
          <div className="update-post-btns">
            <button className="update-btn" disabled={!formValues.name}>
              Update
            </button>
            <button className="delete-post-btn" onClick={deletePost}>
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdatePost
