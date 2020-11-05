import React from "react"
import "../css/custom.css"
import Socials from "../components/socials"
import Icon from "../assests/icon2.inline.svg"
import MouseIcon from "../components/mouseIcon"
import styled, { keyframes } from "styled-components"
import { headShake } from "react-animations"

const headShakeAnimation = keyframes`${headShake}`

const HeadShakeDiv = styled.div`
  animation: 5s infinite ${headShakeAnimation};
`

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="hero flex-wrap-reverse-m  items-center flex-m flex-l justify-between  vh-100 min-vh-100">
        <div className="hero-info ">
          <div className="center">
            <div className=" subtitle">
              <h4 className="dib mb0">Hello</h4>
              <HeadShakeDiv className="dib db-l ">
                <span role="img" aria-label="hi">
                  👋
                </span>
              </HeadShakeDiv>
              <h4 className="mb3 mt3 p0 db">I'm Bogodar</h4>
            </div>
            <h1 className="f1 mt0 b mb0">I create for the web.</h1>
            <p className="f3-m f4  mb5-m mb5-l mb0-m mt0 mb3">
              <br />
              Let's make great things togather!
            </p>
            <a
              className="f5 link dim  mb3 dib white bg-green pa3"
              href="#contact"
            >
              Let's chat
            </a>
          </div>
        </div>

        <div className="hero__icon">
          <Icon />

          <div className="flex justify-center">
            <Socials />
          </div>
        </div>
      </div>
      <MouseIcon />
    </section>
  )
}

export default Hero
