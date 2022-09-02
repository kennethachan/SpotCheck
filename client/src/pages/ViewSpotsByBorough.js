import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
import PostCard from "../components/PostCard"

const URL = "http://localhost:3001"

function ViewSpotsByBorough(props) {
  const [spots, setSpots] = useState([])

  let { boroughId } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    getSpots()
  }, [])

  const getSpots = async () => {
    const res = await axios.get(`${URL}/api/posts/byborough/${boroughId}`)
    console.log(res.data.borough.Posts)
    setSpots(res.data.borough.Posts)
  }
  return (
    <div>
      <div>
        <div className="cat-link">
          <Link className="cat-link" to="/spots-by-borough">
            Back To Boroughs
          </Link>
        </div>
        <div className="posts-container">
          {spots.map((spot) => (
            <PostCard
              key={spot.id}
              onClick={() => {
                navigate(`/posts/byprofile/${spot.id}`)
              }}
              image={spot.image}
              name={spot.name}
              description={spot.description}
              address={spot.address}
              bustLevel={spot.bustLevel}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ViewSpotsByBorough
