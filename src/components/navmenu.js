import React, { useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Scrollspy from "react-scrollspy"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "../css/custom.css"

export default function () {
  const [isVisible, setVisibility] = useState(false)

  const { menuItems } = useSiteMetadata()

  let showStyle = null
  if (isVisible) {
    showStyle = { transform: "scaleY(1)" }
  } else {
    showStyle = null
  }

  return (
    <nav id="nav-wrap" className="nav">
      <button
        className="btn-tog outline-0"
        id="toggle-btn"
        href="/#"
        title="Menu"
        onClick={() => setVisibility(!isVisible)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <Scrollspy
        className="nav-ul list flex"
        style={showStyle}
        items={menuItems.map(a => a.path)}
        currentClassName="current"
        offset={-100}
      >
        {menuItems.map((value, index) => {
          return (
            <li className="mb1 " key={index}>
              <button
                className="btn-nav pointer"
                onClick={() => {
                  scrollTo("#" + value.path)
                  setVisibility(0)
                }}
              >
                {value.label}
              </button>
            </li>
          )
        })}
        <a
          className="link blog-a ml2 outline-0 ul"
          href="gatsby-blog-mdxx.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </a>
      </Scrollspy>
    </nav>
  )
}
