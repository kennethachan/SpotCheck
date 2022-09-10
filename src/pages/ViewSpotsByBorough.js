import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import PostCard from "../components/PostCard"

const URL = "https://spotcheck-backend.herokuapp.com"

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
        <p
          className="back-to-boroughs"
          onClick={() => navigate(`/spots-by-borough`)}
        >
          Back To Boroughs
        </p>
      </div>
      <div className="postbyborough-container">
        {spots
          .slice(0)
          .reverse()
          .map((spot) => (
            <PostCard
              key={spot.id}
              onClick={() => {
                navigate(`/spotdetails/${spot.id}`)
              }}
              image={spot.image}
              name={spot.name}
            />
          ))}
      </div>
    </div>
  )
}

export default ViewSpotsByBorough
