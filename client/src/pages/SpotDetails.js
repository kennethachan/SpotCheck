import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./SpotDetails.css"

const URL = "http://localhost:3001"

function SpotDetails(props) {
  const [spot, setSpot] = useState([])
  const [profile, setProfile] = useState([])
  let navigate = useNavigate()
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
      <p
        className="back-to-boroughs"
        onClick={() => navigate(`/get-posts/${spot.boroughId}`)}
      >
        Back To Spots
      </p>
      <div className="post-details-container">
        <div>
          <img className="spotdetail-image" src={spot.image}></img>
        </div>
        <div className="spotdetail-info">
          <h3 className="spotdetail-name">{spot.name}</h3>
          <p className="post-font-size">{spot.description}</p>
          <p className="post-font-size">
            <span className="bold">Address: </span>
            {spot.address}
          </p>
          <p className="post-font-size">
            <span className="bold">BustLevel:</span> {spot.bustLevel}
          </p>
          <hr></hr>
          <p className="post-font-size">
            <span className="bold">Submitted By:</span> {profile.userName}{" "}
            <img
              className="profile-icon"
              src={profile.image}
              onClick={() => {
                navigate(`/get-profile/${profile.id}`)
              }}
            ></img>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SpotDetails
