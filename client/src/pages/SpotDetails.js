import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"

const URL = "http://localhost:3001"

function SpotDetails(props) {
  const [spot, setSpot] = useState([])
  const [profile, setProfile] = useState([])

  let { postId } = useParams()

  useEffect(() => {
    getSpotDetails()
  }, [])

  const getSpotDetails = async () => {
    const res = await axios.get(`${URL}/api/posts/${postId}`)
    console.log(res.data.post)
    setSpot(res.data.post)
    setProfile(res.data.post.Profile)
  }
  return (
    <div>
      <p className="back-to-boroughs">
        <Link className="back-to-boroughs" to="/spots-by-borough">
          {" "}
          Back To Spots
        </Link>
      </p>
      <div className="post-details-container">
        <img src={spot.image}></img>
        <p>{spot.name}</p>
        <p>{spot.description}</p>
        <p>{spot.address}</p>
        <p>{spot.bustLevel}</p>
        <p>Submitted By: {profile.userName}</p>
        <img src={profile.image}></img>
      </div>
    </div>
  )
}

export default SpotDetails
