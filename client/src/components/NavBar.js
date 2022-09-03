import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import search from "../assets/search.png"
import profileIcon from "../assets/profile.png"

const NavBar = ({ authenticated, profile, handleLogOut }) => {
  let authenticatedOptions
  if (profile) {
    authenticatedOptions = (
      <div className="nav-container">
        <div>
          <h1 className="logo">
            <Link className="logo" to="/feed">
              SpotCheck
            </Link>
          </h1>
        </div>
        <nav className="navbar">
          <p className="welcome">Welcome {profile.userName}!</p>
          <Link className="nav-link nav-icon" to="/profile">
            <img className="nav-icon" src={profileIcon}></img>
          </Link>
          <Link className="nav-link nav-icon" to="/spots-by-borough">
            <img className="nav-icon" src={search}></img>
          </Link>
          <Link className="nav-link" onClick={handleLogOut} to="/">
            Sign Out
          </Link>
        </nav>
      </div>
    )
  }

  const publicOptions = (
    <div className="nav-container">
      <div>
        <h1 className="logo">
          <Link className="logo" to="/feed">
            SpotCheck
          </Link>
        </h1>
      </div>
      <nav className="navbar">
        <Link className="nav-link nav-icon" to="/spots-by-borough">
          <img className="nav-icon" src={search}></img>
        </Link>
        <Link className="nav-link" onClick={handleLogOut} to="/">
          Sign In
        </Link>
      </nav>
    </div>
  )

  return (
    <header>
      {authenticated && profile ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default NavBar
