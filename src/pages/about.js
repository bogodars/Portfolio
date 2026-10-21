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
      <h4 className="tc f3 pt0 pt5-m pt5-l">About</h4>
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
            href="Bogodar_Shmyglyk_cv.pdf"
            target="_blank"
            className={`app h3 w3 ${isActive ? "" : "danger"}`}
          >
            <CvIcon className="w3 h3" />
          </a>
        </button>

        <div className="about__text dib gray lh-copy text-about  space-between mw7  ml4 f5 lh-title mt0 center-m">
          <p>
            Hi, I’m Bogodar. Based in Plovdiv, Bulgaria (originally from Kyiv, Ukraine), I bring a unique professional background combining 7+ years of IT recruitment and HR expertise with over 4 years of hands-on experience in web development and marketing automation.</p>
<p>Specializing in the Salesforce ecosystem, I have a proven track record of configuring Salesforce Marketing Cloud and Marketing Cloud Account Engagement (Pardot), designing responsive email frameworks, and developing dynamic web solutions.</p>
<p>I am highly client-oriented and deeply passionate about delivering exceptional service, translating business requirements into technical solutions, and enabling clients to achieve their business goals.</p>
          <div>
            <h3>Working with</h3>

            <SvgData />
            <h3>Interest</h3>
            <div className="blue f2 ">
              <a
                href="https://www.last.fm/user/turok87"
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
                target="_blank"
                rel="noreferrer"
                href="https://www.goodreads.com/user/show/78275917-bogodar-shmyglyk"
              />
              <FaGlobe className="gold grow pointer" title="Traveling" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
