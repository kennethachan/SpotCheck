import React from "react"
import "./PostCard.css"

function PostCard(props) {
  return (
    <div>
      <div className="postbyborough-wrapper">
        <div className="postbyborough-card">
          <div className="post-info-container" onClick={props.onClick}>
            <img className="postbyborough-img" src={props.image}></img>
            <p className="post-name">{props.name} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
