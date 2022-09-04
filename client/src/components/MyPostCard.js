import React from "react"
import axios from "axios"
import edit from "../assets/edit.png"
import deleteIcon from "../assets/delete.png"
import "./MyPostCard.css"
import { confirm } from "react-confirm-box"
import { Navigate } from "react-router-dom"

const URL = "http://localhost:3001"

function MyPostCard(props) {
  console.log(props.id)
  const deletePost = async () => {
    const confirmDelete = await confirm(
      "Are you sure you want to delete your post?"
    )
    if (confirmDelete) {
      console.log("user clicked yes")
      const res = await axios
        .delete(`${URL}/api/posts/${props.id}`)
        .then((res) => {
          console.log(res)
          Navigate(0)
        })
    } else {
      console.log("user clicked no")
    }
  }

  return (
    <div>
      {" "}
      <div className="post-details-container">
        <div>
          <img className="spotdetail-image" src={props.image}></img>
        </div>
        <div className="spotdetail-info">
          <h3 className="spotdetail-name">
            {props.name} <img className="edit-icon" src={edit}></img>
            <img
              className="delete-icon"
              src={deleteIcon}
              onClick={deletePost}
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
