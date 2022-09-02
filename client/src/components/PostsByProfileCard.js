import React from "react"

function PostsByProfileCard(props) {
  return (
    <div>
      {" "}
      <div className="post-details-container">
        <div>
          <img className="spotdetail-image" src={props.image}></img>
        </div>
        <div className="spotdetail-info">
          <h3 className="spotdetail-name">{props.name}</h3>
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

export default PostsByProfileCard
