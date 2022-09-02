import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = ({ authenticated, profile, handleLogOut }) => {
  let authenticatedOptions
  if (profile) {
    authenticatedOptions = (
      <nav className="navbar">
        <h3 className="welcome">Welcome {profile.userName}!</h3>
        <Link className="nav-link" to="/feed">
          Feed
        </Link>
        <Link className="nav-link" to="/spots-by-borough">
          Spots By Borough
        </Link>
        <Link className="nav-link" onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav className="navbar">
      <Link className="nav-link" to="/feed">
        Feed
      </Link>
      <Link className="nav-link" to="/spots-by-borough">
        Spots By Borough
      </Link>
    </nav>
  )

  return (
    <header>
      {authenticated && profile ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default NavBar
