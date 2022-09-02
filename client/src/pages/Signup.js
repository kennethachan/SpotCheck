import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const URL = "http://localhost:3001"

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
    <div className="signUpBody">
      <div>
        <div className="signup-container">
          <div className="signup-background">
            <form className="signup-form" onSubmit={handleSubmit}>
              <h1>Sign Up</h1>
              <hr></hr>
              <div className="input-wrapper">
                <input
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
              <hr></hr>
              <div className="link-switch">
                <Link className="link signLink" to="/">
                  Already have an account?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
