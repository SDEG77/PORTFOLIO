import { useState } from "react"

import logo from "/dist/assets/images/logo-only.png"

export default function Navbar() {
  const [about, setAbout] = useState(false);
  
  return (
    <nav className="topbar">
      {/* // <!--logo and name--> */}
      <div className="brand"> 
        <img src={logo} alt="My brand logo" style={{width: "120px", height: "100%"}} />
        <p className="my-name">Sigrae Derf E. Gabriel</p>
      </div>
      {/* <!--logo and name--> */}

      {/* <!--navigation buttons--> */}
      <div className="nav-btns"> 
        <div className="nav-border"></div>
          <a className="home-btn" href="#home">
            Home
          </a>
        <div className="nav-border"></div>

        <div className="dropdown-btn">
          <a className="portfolio-link" href="#about" onMouseEnter={() => about ? setAbout(false) : setAbout(true)}>
            About  
          </a>

          <div className="opt-group" style={about ?  {marginTop: '0px'} : {marginTop: '-500px'}} id="about-accordion" onMouseLeave={() => about ? setAbout(false) : setAbout(true)}>
            <div className="nav-border-horizontal"></div>
            <div className="port-opt"><a href="#about">Myself</a></div>

            <div className="nav-border-horizontal"></div>
            <div className="port-opt"><a href="#skills">My Skills</a></div>

            <div className="nav-border-horizontal"></div>
            <div className="port-opt"><a href="#education">My Education</a></div>

            <div className="nav-border-horizontal"></div>
            <div className="port-opt"><a href="#seminar">Seminars</a></div>
          </div>
        </div>
        
        <div className="nav-border"></div>

        <div className="dropdown-btn-2">
          <a className="portfolio-link" href="#portfolio" onMouseEnter={() => setAbout(false)}>
            Portfolio
          </a>
        </div>
      </div>
    </nav>
  )
}




