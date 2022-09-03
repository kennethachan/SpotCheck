import React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const URL = "http://localhost:3001"

function MyProfile({ profile, post }) {
  console.log(profile)
  console.log(post)
  let navigate = useNavigate()

  const [user, setUser] = useState([])
  const [spot, setSpot] = useState([])

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
    setSpot(res.data.Posts)
  }

  if (spot === "undefined" || spot.length == 0) {
    return (
      <div>
        <img src={user.image}></img>
        <h2>{user.userName}</h2>
        <h2>No Posts :(</h2>
      </div>
    )
  } else if (!spot === "undefined" || !spot.length == 0) {
  }
}

export default MyProfile
