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
        <div className="">
          <p className="back-to-boroughs">
            <Link className="back-to-boroughs" to="/spots-by-borough">
              {" "}
              Back To Boroughs
            </Link>
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
    </div>
  )
}

export default ViewSpotsByBorough
