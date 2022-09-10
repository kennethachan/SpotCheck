import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import "./Signup.css"
import cinemaBanks from "../assets/cinema-banks.jpeg"

const URL = "https://spotcheck-backend.herokuapp.com"

function Signup(props) {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    userName: "",
    image: "",
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let data = {
      email: formValues.email,
      password: formValues.password,
      userName: formValues.userName,
      image: formValues.image,
    }

    await axios.post(`${URL}/api/profiles/register-profile`, data)

    setFormValues({
      email: "",
      password: "",
      userName: "",
      image: "",
    })
    navigate("/")
  }

  return (
    <div>
      <div className="signup-wrapper">
        <div>
          <img className="signup-img" src={cinemaBanks}></img>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 className="signup">Sign Up</h2>
          <div className="input-wrapper">
            <input
              className="input"
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              className="input"
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              className="input"
              onChange={handleChange}
              name="userName"
              type="text"
              placeholder="Username"
              value={formValues.userName}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              className="input"
              onChange={handleChange}
              type="text"
              name="image"
              placeholder="Profile Image"
              value={formValues.image}
              required
            />
          </div>
          <button
            className="signup-btn"
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Sign Up
          </button>
          <div className="link-switch">
            <Link className="signin-link" to="/">
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
