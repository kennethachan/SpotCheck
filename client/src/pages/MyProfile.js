import React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import "./MyProfile.css"
import MyPostCard from "../components/MyPostCard"

const URL = "http://localhost:3001"

function MyProfile({ profile, post }) {
  console.log(profile)
  console.log(post)
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
          <h2 className="userName">{user.userName}</h2>
          <div>
            <button className="profile-btn">Account</button>
          </div>
        </div>
        <h2 className="no-posts">No Posts :(</h2>
      </div>
    )
  } else if (!spots === "undefined" || !spots.length == 0) {
    return (
      <div>
        <div className="profile-menu">
          <img className="profile-img" src={user.image}></img>
          <h2 className="userName">{user.userName}</h2>
          <div>
            <button className="profile-btn">Account</button>
          </div>
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
