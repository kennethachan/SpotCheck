import React from "react"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import "./Feed.css"

const URL = "https://spotcheck-backend.herokuapp.com"

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
                <div className="post-profile-info">
                  <p className="profile-name">
                    <img
                      className="profile-icon"
                      src={post.Profile.image}
                      alt="profile picture"
                      onClick={() => {
                        navigate(`/get-profile-from-feed/${post.Profile.id}`)
                      }}
                    ></img>
                    {post.Profile.userName}{" "}
                  </p>
                </div>
                <img className="post-img" src={post.image} alt="post-content" />
                <h3 className="post-feed-name">{post.name}</h3>
                <hr className="hr"></hr>
                <div className="post-info">
                  <p className="post-font-size">
                    <span className="bold">{post.Profile.userName}:</span>
                    {post.description}
                  </p>
                  <p className="post-font-size">
                    <span className="bold">Address:</span> {post.address}
                  </p>
                  <p className="post-font-size">
                    <span className="bold">Bust Level: </span>
                    {post.bustLevel}
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
