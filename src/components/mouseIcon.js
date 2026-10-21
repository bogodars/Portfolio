import React from "react"
import styled, { keyframes } from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

const MouseIcon = ({ onClick }) => (
  <ScrollLink>
    <a
      href="#about"
      onClick={(e) => {
        e.preventDefault(); // Запобігає стрибку дефолтного хендлера браузера перед скролом
        scrollTo("#about");
      }}
    >
      <MouseContainer xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 130">
        <g fill="none">
          <Mouse width="65" height="110" x="1.5" y="2.9" rx="36" />
          <Scroll cx="36.5" cy="31.5" r="4.5" />
        </g>
      </MouseContainer>
    </a>
  </ScrollLink>
)

const MouseContainer = styled.svg`
  max-width: 2.5rem;
  width: 100%;
  height: auto;
  display: block; /* Прибирає дефолтні інлайн-відступи знизу під SVG */
`

const ScrollLink = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  /* Фікс стрибаючого зеленого обідка браузера для посилання */
  & a {
    display: inline-block;
    outline: none !important; /* Повністю вимикає дефолтний прямокутний контур */
    outline-offset: 0 !important;
  }

  /* Додає акуратне легке свічення навколо самої мишки при табах клавіатурою для збереження Accessibility (доступності) */
  & a:focus-visible \${MouseContainer} {
    filter: drop-shadow(0 0 4px rgba(25, 169, 116, 0.6));
  }

  @media only screen and (max-width: 960px) {
    display: none;
  }
`

const ScrollAnimation = keyframes`
  0%,
  20% {
    transform: translateY(0) scaleY(1);
  }

  10% {
    opacity: 1;
  }

  100% {
    transform: translateY(36px) scaleY(2);
    opacity: 0.01;
  }
`

const Mouse = styled.rect.attrs(props => ({
  stroke: "#19a974", // Замінено на ваш точний зелений колір Tachyons для синхронізації
  strokeWidth: "3",
}))``

const Scroll = styled.circle`
  animation-name: ${ScrollAnimation};
  animation-duration: 1.5s;
  animation-timing-function: cubic-bezier(0.65, -0.55, 0.25, 1.5);
  animation-iteration-count: infinite;
  transform-origin: 50% 20.5px;
  will-change: transform;
  fill: #19a974; /* Замінено на ваш точний зелений колір Tachyons */
`

export default MouseIcon
