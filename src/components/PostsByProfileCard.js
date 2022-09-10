import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"

const URL = "https://spotcheck-backend.herokuapp.com"

function PostsByProfileCard(props) {
  const [profile, setProfile] = useState([])

  useEffect(() => {
    getSpotDetails()
  }, [])

  console.log(props.id)

  const getSpotDetails = async () => {
    const res = await axios.get(`${URL}/api/posts/${props.id}`)
    console.log(res.data)
    setProfile(res.data.post.Profile)
  }

  return (
    <div className="post-details-container">
      <img className="spotdetail-image" src={props.image}></img>
      <div className="spotdetail-info post-font-size">
        <h3 className="spotdetail-name">{props.name}</h3>
        <hr></hr>
        <p>
          <span className="bold">{profile.userName}:</span>
          {props.description}
        </p>
        <p>
          <span className="bold">Address: </span>
          {props.address}
        </p>
        <p>
          <span className="bold">BustLevel:</span> {props.bustLevel}
        </p>
      </div>
    </div>
  )
}

export default PostsByProfileCard
