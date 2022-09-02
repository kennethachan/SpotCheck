import logo from "./logo.svg"
import "./App.css"
import { Route, Routes } from "react-router"
import { useState, useEffect } from "react"
import axios from "axios"
import NavBar from "./components/NavBar"
import Feed from "./pages/Feed"
import MyProfile from "./pages/MyProfile"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import SpotsByBorough from "./pages/SpotsByBorough"
import UpdatePost from "./pages/UpdatePost"
import UpdateProfile from "./pages/UpdateProfile"

const URL = "http://localhost:3001"

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [profile, setProfile] = useState(null)
  const [post, setPost] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      let res = await axios.get(`${URL}/api/posts/get-posts`)
      console.log(res.data)
      setPost(res.data)
    }
    getSkills()
  }, [])

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      checkToken()
    }
  }, [])

  const checkToken = async () => {
    const ProfileData = await CheckSession()
    localStorage.setItem("token", ProfileData.token)
    setProfile(ProfileData.profile)
    toggleAuthenticated(true)
  }

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar
          profile={profile}
          handleLogOut={handleLogOut}
          authenticated={authenticated}
        ></NavBar>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Signin
                setProfile={setProfile}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feed" element={<Feed />} />
          <Route
            path="/profile"
            element={
              <MyProfile
                profile={profile}
                post={post}
                authenticated={authenticated}
                handleLogOut={handleLogOut}
              />
            }
          />
          <Route
            path="/spots-by-borough"
            element={<SpotsByBorough handleLogOut={handleLogOut} />}
          />
          <Route
            path="/update-post"
            element={
              <UpdatePost
                profile={profile}
                post={post}
                authenticated={authenticated}
                handleLogOut={handleLogOut}
              />
            }
          />
          <Route
            path="/update-profile"
            element={
              <UpdateProfile
                profile={profile}
                post={post}
                authenticated={authenticated}
                handleLogOut={handleLogOut}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
