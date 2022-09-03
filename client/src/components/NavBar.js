import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = ({ authenticated, profile, handleLogOut }) => {
  let authenticatedOptions
  if (profile) {
    authenticatedOptions = (
      <div className="nav-container">
        <div>
          <h2 className="logo">SpotCheck</h2>
        </div>
        <nav className="navbar">
          <p className="welcome">Welcome {profile.userName}!</p>
          <Link className="nav-link" to="/feed">
            Feed
          </Link>
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
          <Link className="nav-link" to="/spots-by-borough">
            Search
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
        <h2 className="logo">SpotCheck</h2>
      </div>
      <nav className="navbar">
        <Link className="nav-link" to="/feed">
          Feed
        </Link>
        <Link className="nav-link" to="/spots-by-borough">
          Spots By Borough
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
