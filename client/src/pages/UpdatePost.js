import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { confirm } from "react-confirm-box"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
const URL = "http://localhost:3001"

function UpdatePost(props) {
  let { postId } = useParams()
  let navigate = useNavigate()

  const [spots, setSpots] = useState([])

  useEffect(() => {
    getSpot()
  }, [])

  const getSpot = async () => {
    const res = await axios.get(`${URL}/api/posts/${postId}`)
    console.log(res.data)
    setSpots(res.data)

    const deletePost = async () => {
      const confirmDelete = await confirm(
        "Are you sure you want to delete your post?"
      )
      if (confirmDelete) {
        console.log("user clicked yes")
        const res = await axios
          .delete(`${URL}/api/posts/${postId}`)
          .then((res) => {
            console.log(res)
            navigate("/profile")
          })
      } else {
        console.log("user clicked no")
      }
    }
    return <div>testing</div>
  }
}

export default UpdatePost
