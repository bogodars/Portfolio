import React from "react"
import { Link } from "gatsby"
import Navmenu from "./navmenu"
import Switch from "react-switch"
import Emoji from "./emoji"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import "../css/custom.css"

const Header = ({ theme }) => (
  <header className="w-100 fixed left-0 top-0 z-999 garamond bg-green">
    <div className="relative pr3 pl3 mw7 center no-underline justify-between align-items  flex  items-center">
      <Link to="/#home" className="link">
        <h3 className="logo">{useSiteMetadata().headerTitle}</h3>
      </Link>
      <Navmenu />
      <div
        className="toggle-btn"
        style={{
          position: "absolute",
          top: "60px",
          left: "10px",
          // visibility: "hidden",
        }}
      >
        <Switch
          onChange={() =>
            theme.updateTheme(theme.name === "light" ? "dark" : "light")
          }
          checked={theme.name === "dark"}
          offColor="#333"
          handleDiameter={25}
          onColor="#9eebcf"
          checkedIcon={<Emoji label="sun" symbol="☀️" />}
          uncheckedIcon={<Emoji label="moon" symbol="🌙" />}
          boxShadow="0 0 2px 3px #9eebcf"
          activeBoxShadow="0 0 2px 3px #dfb3e6"
          height={25}
          width={48}
        />
      </div>
    </div>
  </header>
)

export default Header
