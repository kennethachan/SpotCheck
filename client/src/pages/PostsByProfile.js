import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
import PostsByProfileCard from "../components/PostsByProfileCard"

const URL = "http://localhost:3001"

function PostsByProfile(props) {
  const [spots, setSpots] = useState([])

  let { profileId } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    getSpotsByProfile()
  }, [])

  const getSpotsByProfile = async () => {
    const res = await axios.get(`${URL}/api/profiles/${profileId}`)
    console.log(res.data.Posts)
    setSpots(res.data.Posts)
  }
  return (
    <div>
      <div className="">
        <p className="back-to-boroughs">
          <Link className="back-to-boroughs" to="/spots-by-borough">
            {" "}
            Back To Boroughs
          </Link>
        </p>
      </div>
      <div className="">
        {spots.map((spot) => (
          <PostsByProfileCard
            key={spot.id}
            image={spot.image}
            name={spot.name}
            description={spot.description}
            address={spot.address}
            bustLevel={spot.bustLevel}
          />
        ))}
      </div>
    </div>
  )
}

export default PostsByProfile
