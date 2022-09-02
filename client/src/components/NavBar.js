import React from "react"
import { Link } from "react-router-dom"

const NavBar = ({ authenticated, profile, handleLogOut }) => {
  let authenticatedOptions
  if (profile) {
    authenticatedOptions = (
      <nav>
        <h3>Welcome {profile.userName}!</h3>
        <Link to="/feed">Feed</Link>
        <Link to="/spots-by-borough">Spots By Borough</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/feed">Feed</Link>
      <Link to="/spots-by-borough">Spots By Borough</Link>
      <Link to="/">Sign In</Link>
    </nav>
  )

  return (
    <header>
      {authenticated && profile ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default NavBar
