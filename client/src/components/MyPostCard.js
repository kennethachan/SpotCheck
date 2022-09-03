import React from "react"
import edit from "../assets/edit.png"
import deleteIcon from "../assets/delete.png"
import "./MyPostCard.css"

function MyPostCard(props) {
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
            <img className="delete-icon" src={deleteIcon}></img>
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
