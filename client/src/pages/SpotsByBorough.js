import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import blubba from "../assets/blubba.jpeg"
import ps6 from "../assets/ps6.jpeg"
import ogden from "../assets/ogden.jpeg"
import mambo from "../assets/mambo.jpeg"
import flushing from "../assets/flushing.jpeg"
import "./SpotsByBorough.css"

const URL = "http://localhost:3001"

function SpotsByBorough(props) {
  let navigate = useNavigate()
  const [manhattan, setManhattan] = useState([])
  const [statenIsland, setStatenIsland] = useState([])
  const [bronx, setBronx] = useState([])
  const [brooklyn, setBrooklyn] = useState([])
  const [queens, setQueens] = useState([])

  useEffect(() => {
    getBoroughs()
  }, [])

  const getBoroughs = async () => {
    const res = await axios.get(`${URL}/api/boroughs/get-boroughs`)
    console.log(res.data)
    setManhattan(res.data[0])
    setStatenIsland(res.data[1])
    setBronx(res.data[2])
    setBrooklyn(res.data[3])
    setQueens(res.data[4])
  }

  return (
    <div>
      <h1 className="borough-title">The NYC Boroughs</h1>
      <div className="borough-container">
        <div className="borough-card">
          <img
            className="borough-img"
            onClick={() => navigate(`/get-posts/${manhattan.id}`)}
            src={blubba}
          ></img>
          <p
            className="borough-name
          "
          >
            {manhattan.name}
          </p>
        </div>
        <div className="borough-card">
          <img
            className="borough-img"
            onClick={() => navigate(`/get-posts/${statenIsland.id}`)}
            src={ps6}
          ></img>
          <p
            className="borough-name
          "
          >
            {statenIsland.name}
          </p>
        </div>
        <div className="borough-card">
          <img
            className="borough-img"
            onClick={() => navigate(`/get-posts/${bronx.id}`)}
            src={ogden}
          ></img>
          <p
            className="borough-name
          "
          >
            {bronx.name}
          </p>
        </div>
        <div className="borough-card">
          <img
            className="borough-img"
            onClick={() => navigate(`/get-posts/${brooklyn.id}`)}
            src={mambo}
          ></img>
          <p
            className="borough-name
          "
          >
            {brooklyn.name}
          </p>
        </div>
        <div className="borough-card">
          <img
            className="borough-img"
            onClick={() => navigate(`/get-posts/${queens.id}`)}
            src={flushing}
          ></img>
          <p
            className="borough-name
          "
          >
            {queens.name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SpotsByBorough
