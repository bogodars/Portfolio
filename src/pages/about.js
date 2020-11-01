import React, { useState } from "react"
import CvIcon from "../assests/cv.inline.svg"
import SvgData from "../components/svg-data"
import {
  FaLastfmSquare,
  FaTableTennis,
  FaBookReader,
  FaGlobe,
} from "react-icons/fa"
import Tilt from "react-tilt"

export default function About() {
  const [isActive, setActive] = useState(true)

  const toggleClass = () => {
    setActive(!isActive)
  }

  return (
    <section id="about">
      {" "}
      <h4 className="tc f3 pt0 pt5-m ">About</h4>
      <div className="flex-m flex-l  flex-nowrap-l space-between space-between-l space-between-m flex-wrap-m">
        <button
          className="relative button-avatar column flex center-m w7 mw-100"
          onClick={toggleClass}
        >
          {" "}
          <Tilt className="Tilt z-2">
            <div className="Tilt-inner ">
              <img
                className="img-avatar db mw-100 center-m center-l  br-100"
                src="img/profile.jpg"
                alt="avatar"
              />
            </div>
          </Tilt>
          <a
            href="BOGODAR_SHMYGLYK_Resume.pdf"
            target="_blank"
            className={`app h3 w3 ${isActive ? "" : "danger"}`}
          >
            <CvIcon className="w3 h3" />
          </a>
        </button>

        <div className="about__text dib gray lh-copy text-about  space-between mw7  ml4 f5 lh-title mt0 center-m">
          <p>
            Hi, I’m Bogodar. Currently I live in Kyiv, Ukraine. I have more then
            7 years recruiting/hr background in different it companies. Last two
            years i'm learing and creating for the web and i like it.
          </p>
          <p>
            Creating new things, looking for help and share own solutions is
            pricless. I'm intersting in design. From
            <a
              className="link none  pl2 pr2"
              href="https://uxdesign.cc/intro-to-ux-the-norman-door-61f8120b6086 "
              title="Read about Don Norman's door"
              target="_blank"
              rel="noreferrer"
            >
              doors{" "}
              <span role="img" aria-label="door">
                🚪
              </span>
            </a>
            to computers.
          </p>{" "}
          <p>
            I like understanding processes and improving them. I like good
            managment and be part of the team. I like provide and recieve good
            service. I like cooperate with people and some times days with lack
            of time and pressure because of deadlines.
          </p>
          <p>I like good stories. So let's create next one togather.</p>
          <div>
            <h3>Working with</h3>

            <SvgData />
            <h3>Interest</h3>
            <div className="blue f2 ">
              <a
                href="https://www.npmjs.com/"
                alt="last.fm"
                target="_blank"
                rel="noreferrer"
                title="Last.fm"
              >
                <FaLastfmSquare className="red mr3 grow pointer" />
              </a>

              <FaTableTennis
                className="brown mr3 grow pointer"
                title="Ping-pong"
              />
              <FaBookReader
                className="green mr3 grow pointer"
                title="Reading"
              />
              <FaGlobe className="gold grow pointer" title="Traveling" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
