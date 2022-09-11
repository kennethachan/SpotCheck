import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
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
    <div>
      <div className="signin-wrapper">
        <img className="signin-img" src={pipegap} alt="skate spot"></img>
        <div className="signin-container">
          <form className="signin-form" onSubmit={handleSubmit}>
            <h2 className="signin">Sign In</h2>
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
      <div className="disclaimer">
        <p>
          Disclaimer: Skateboarding itself is not illegal in New York City, but
          it is prohibited by park or property rules in many of these places.
          They are merely frequent destinations for street skaters in the city,
          and have been so for years upon years. Please comply with any property
          owners, security or police if you are told to leave. Confrontation
          only leads to bigger problems for everyone else and isn’t worth it.
        </p>
      </div>
    </div>
  )
}

export default Signin
