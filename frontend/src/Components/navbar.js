import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useEffect, useState } from "react";
function Navbar() {
  const {logout}=useLogout()
  const {user}=useAuthContext()
   const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "fitforge"
  );

  useEffect(() => {
    if (theme === "fitforge") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const handlelogout=()=>{
    logout()



  }
  return (
    <header>
        <div className='container'>
            <Link to="/">
            <h1>
              FitForge
            </h1>
             </Link>
             <nav>
               {/* Theme Dropdown */}
          <div className="theme-box">
          <p className="nav-label">Theme</p>
          <select
            className="theme-select"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="fitforge">FitForge</option>
            <option value="repsync">RepSync</option>
            <option value="irontrack">IronTrack</option>
            <option value="pulsefit">PulseFit</option>
            <option value="corelog">CoreLog</option>
            <option value="gymgenius">GymGenius</option>
            <option value="sweatmate">SweatMate</option>
            <option value="beastmode">BeastMode</option>
            <option value="titantracker">TitanTracker</option>
          </select>
          </div>


              {
                user && (
              <div>
                <div className="user-avatar">
                {user.email[0].toUpperCase()}
                </div>
                <span>{user.email}</span>
                <button onClick={handlelogout}>Logout</button>
              </div>
                )
              }
              {
                !user &&(
                  <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>

              </div>
                )
              }
              
              
             </nav>

        </div>
    </header>
  )
}

export default Navbar
