import React from "react"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

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
    <div className="post-container">
      {posts
        .slice(0)
        .reverse()
        .map((post) => (
          <div
            className="post-card"
            key={post.id}
            onClick={() => {
              navigate(`/view-profile/${post.id}`)
            }}
          >
            <img src={post.image} alt="post-content" />
            <h3>{post.name}</h3>
            <div className="post-info">
              <p>Address: {post.address}</p>
              <p>Bust Level:{post.bustLevel}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Feed
