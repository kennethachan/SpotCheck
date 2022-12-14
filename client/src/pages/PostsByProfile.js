import React from "react"
import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios"
import PostsByProfileCard from "../components/PostsByProfileCard"
import "./PostsByProfile.css"

const URL = "http://localhost:3001"

function PostsByProfile(props) {
  const [spots, setSpots] = useState([])
  const [profile, setProfile] = useState([])
  let navigate = useNavigate()
  let { profileId } = useParams()

  useEffect(() => {
    getSpotsByProfile()
  }, [])

  const getSpotsByProfile = async () => {
    const res = await axios.get(`${URL}/api/profiles/${profileId}`)
    console.log(res.data)
    console.log(res.data.Posts)
    setProfile(res.data)
    setSpots(res.data.Posts)
  }
  return (
    <div>
      <p
        className="back-to-boroughs"
        onClick={() => navigate(`/spots-by-borough`)}
      >
        {" "}
        Back To Boroughs
      </p>
      <div className="user-info">
        <img className="profile-img" src={profile.image}></img>
        <h2 className="userName">{profile.userName}</h2>
        <hr className="bio"></hr>
        <p className="bio">{profile.bio}</p>
      </div>
      <div>
        {spots.map((spot) => (
          <PostsByProfileCard
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

export default PostsByProfile
