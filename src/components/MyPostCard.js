import React from "react"
import edit from "../assets/edit.png"
import "./MyPostCard.css"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const URL = "https://spotcheck-backend.herokuapp.com"

function MyPostCard(props) {
  let navigate = useNavigate()
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
    <div>
      <div className="post-details-container post-font-size">
        <div>
          <img
            className="spotdetail-image"
            src={props.image}
            alt="skate spot"
          ></img>
        </div>
        <div className="spotdetail-info">
          <h3 className="spotdetail-name">
            {props.name}{" "}
            <img
              className="edit-icon"
              src={edit}
              alt="edit icon"
              onClick={() => navigate(`/update-post/${props.id}`)}
            ></img>
            <hr></hr>
          </h3>
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
    </div>
  )
}

export default MyPostCard
