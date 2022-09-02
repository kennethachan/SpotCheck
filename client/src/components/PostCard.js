import React from "react"

function PostCard(props) {
  return (
    <div>
      <div className="post-card-container">
        <div className="post-card" onClick={props.onClick}>
          <img src={props.image}></img>
          <p>{props.name} </p>
          <p>{props.description} </p>
          <p>{props.address} </p>
          <p>{props.bustLevel} </p>
        </div>
      </div>
    </div>
  )
}

export default PostCard
