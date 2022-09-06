import React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import "./SpotDetails.css"
import Directions from "../components/Directions"

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
        className="back-to-spots"
        onClick={() => navigate(`/get-posts/${spot.boroughId}`)}
      >
        Back To Spots
      </p>
      <div className="spot-details-container">
        <div className="post-card">
          <div className="post-info-wrapper">
            <div className="post-profile-info">
              <p className="profile-name">
                <span className="bold"></span>{" "}
                <img
                  className="profile-icon"
                  src={profile.image}
                  onClick={() => {
                    navigate(`/get-profile/${profile.id}`)
                  }}
                ></img>
                {profile.userName}{" "}
              </p>
              <p className="spot-details-profile-name-mobile">
                <span className="bold"></span>{" "}
                <img
                  className="profile-icon"
                  src={profile.image}
                  onClick={() => {
                    navigate(`/get-profile/${profile.id}`)
                  }}
                ></img>
                {profile.userName}{" "}
              </p>
            </div>
            <img className="post-img" src={spot.image}></img>

            <div className="post-info">
              <h3 className="post-name">{spot.name}</h3>
              <hr className="hr"></hr>
              <p className="post-font-size">
                <span className="bold">{profile.userName}: </span>
                {spot.description}
              </p>
              <p className="post-font-size">
                <span className="bold">Address: </span>
                {spot.address}
              </p>
              <p className="post-font-size">
                <span className="bold">BustLevel:</span> {spot.bustLevel}
              </p>
            </div>
          </div>
        </div>

        <div>
          <Directions />
        </div>
      </div>
    </div>
  )
}

export default SpotDetails
