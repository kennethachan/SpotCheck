import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { confirm } from "react-confirm-box"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const URL = "http://localhost:3001"

function UpdateProfile({ profile, handleLogOut }) {
  let navigate = useNavigate()
  const [profileInfo, setProfileInfo] = useState([])
  const [formValues, setFormValues] = useState({
    userName: "",
    image: "",
  })

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {
    const res = await axios.get(`${URL}/api/profiles/${profile.id}`)
    console.log(res.data)
    setProfileInfo(res.data)
  }

  const deleteProfile = async () => {
    const confirmDelete = await confirm(
      "Are you sure you want to delete your account?"
    )
    if (confirmDelete) {
      console.log("user clicked yes")
      const res = await axios
        .delete(`${URL}/api/profiles/${profile.id}`)
        .then((res) => {
          console.log(res)
          handleLogOut()
          navigate("/")
        })
    } else {
      console.log("user clicked no")
    }
  }

  const updateProfile = async (data) => {
    const res = await axios
      .put(`${URL}/api/profiles/${profile.id}`, {
        userName: data.userName,
        image: data.image,
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
      userName: formValues.userName,
      image: formValues.image,
    }

    updateProfile(data)

    setFormValues({
      userName: "",
      image: "",
    })

    navigate("/profile")
  }

  return (
    <div>
      <div className="post-details-container">
        <div>
          <img className="spotdetail-image" src={profileInfo.image}></img>
        </div>
        <form className="update-post-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              className="update-input"
              onChange={handleChange}
              name="userName"
              type="text"
              placeholder={profileInfo.userName}
              value={formValues.userName}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              className="update-input"
              onChange={handleChange}
              name="image"
              type="text"
              placeholder={profileInfo.image}
              value={formValues.image}
              required
            />
          </div>

          <div className="update-btns">
            <button className="new-post-btn">Update</button>
            <button className="delete-post-btn" onClick={deleteProfile}>
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProfile
