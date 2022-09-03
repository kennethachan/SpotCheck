import React from "react"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import "./Feed.css"

const URL = "http://localhost:3001"

function Feed(props) {
  let navigate = useNavigate()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    const res = await axios.get(`${URL}/api/posts/get-posts`)
    console.log(res.data)
    setPosts(res.data)
  }

  return (
    <div>
      <div className="post-container">
        {posts
          .slice(0)
          .reverse()
          .map((post) => (
            <div className="post-card" key={post.id}>
              <div className="post-info-container">
                <img className="post-img" src={post.image} alt="post-content" />
                <h3 className="post-name">{post.name}</h3>

                <div className="post-info">
                  <p className="post-font-size">{post.description}</p>
                  <p className="post-font-size">
                    <span className="bold">Address:</span> {post.address}
                  </p>
                  <p className="post-font-size">
                    <span className="bold">Bust Level: </span>
                    {post.bustLevel}
                  </p>
                </div>
                <hr></hr>
                <div className="post-profile-info">
                  <p className="post-font-size">
                    <span className="bold post-font-size">Submitted by:</span>{" "}
                    <img
                      className="profile-icon"
                      src={post.Profile.image}
                      onClick={() => {
                        navigate(`/get-profile-from-feed/${post.Profile.id}`)
                      }}
                    ></img>
                    {post.Profile.userName}{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Feed
