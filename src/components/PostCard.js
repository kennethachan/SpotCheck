import React from "react"
import "./PostCard.css"

function PostCard(props) {
  return (
    <div>
      <div className="postbyborough-wrapper" onClick={props.onClick}>
        <div className="postbyborough-card">
          <div className="spot-info-container">
            <img
              className="postbyborough-img"
              src={props.image}
              alt="skate spot"
            ></img>
            <p className="post-name">{props.name} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
