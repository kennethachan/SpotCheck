import React from "react"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import "./MyProfile.css"
import MyPostCard from "../components/MyPostCard"
import edit from "../assets/white-edit.png"

const URL = "http://localhost:3001"

function MyProfile({ profile }) {
  let navigate = useNavigate()
  const [user, setUser] = useState([])
  const [spots, setSpots] = useState([])

  useEffect(() => {
    getProfile()
    getSpotsByProfile()
  }, [])

  const getProfile = async () => {
    const res = await axios.get(`${URL}/api/profiles/${profile.id}`)
    console.log(res.data)
    setUser(res.data)
  }

  const getSpotsByProfile = async () => {
    const res = await axios.get(`${URL}/api/profiles/${profile.id}`)
    console.log(res.data.Posts)
    setSpots(res.data.Posts)
  }

  if (spots === "undefined" || spots.length == 0) {
    return (
      <div>
        <div className="profile-menu">
          <img className="profile-img" src={user.image}></img>
          <h2 className="userName">
            {user.userName}
            <img
              className="edit-profile-icon"
              src={edit}
              onClick={() => navigate(`/update-profile/${profile.id}`)}
            ></img>
          </h2>
          <hr className="bio"></hr>
          <p className="bio">{user.bio}</p>
        </div>
        <h2 className="no-posts">No Posts :(</h2>
      </div>
    )
  } else if (!spots === "undefined" || !spots.length == 0) {
    return (
      <div>
        <div className="profile-menu">
          <img className="profile-img" src={user.image}></img>
          <h2 className="userName">
            {user.userName}{" "}
            <img
              className="edit-profile-icon"
              src={edit}
              onClick={() => navigate(`/update-profile/${profile.id}`)}
            ></img>
          </h2>
          <hr className="bio"></hr>
          <p className="bio">{user.bio}</p>
        </div>
        <div>
          {spots.map((spot) => (
            <MyPostCard
              key={spot.id}
              id={spot.id}
              image={spot.image}
              name={spot.name}
              description={spot.description}
              address={spot.address}
              bustLevel={spot.bustLevel}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default MyProfile
