import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { SignInUser } from "../services/Auth"
import "./Signin.css"
import pipegap from "../assets/pipe-gap.jpeg"

function Signin(props) {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({ userName: "", password: "" })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ userName: "", password: "" })
    props.setProfile(payload)
    props.toggleAuthenticated(true)
    navigate("/feed")
  }
  return (
    <div className="signin-wrapper">
      <div className="signin-img-container">
        <img className="signin-img" src={pipegap}></img>
      </div>
      <div className="signin-container">
        <form className="signin-form" onSubmit={handleSubmit}>
          <h1>Sign In</h1>
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
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              required
            />
          </div>
          <button
            className="signin-btn"
            disabled={!formValues.userName || !formValues.password}
          >
            Sign In
          </button>
          <div className="link-switch">
            <Link className="signup-link" to="/signup">
              Don't have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin
