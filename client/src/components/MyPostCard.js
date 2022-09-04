import React from "react"
import axios from "axios"
import edit from "../assets/edit.png"
import "./MyPostCard.css"
import { useNavigate } from "react-router-dom"

const URL = "http://localhost:3001"

function MyPostCard(props) {
  let navigate = useNavigate()

  return (
    <div>
      {" "}
      <div className="post-details-container">
        <div>
          <img className="spotdetail-image" src={props.image}></img>
        </div>
        <div className="spotdetail-info">
          <h3 className="spotdetail-name">
            {props.name}{" "}
            <img
              className="edit-icon"
              src={edit}
              onClick={() => navigate(`/update-post/${props.id}`)}
            ></img>
          </h3>
          <p>{props.description}</p>
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
