import React from "react"
import Emoji from "./emoji"
function footer() {
  return (
    <footer className="tc bg-green ">
      <h3 className="tc">
        Built with <Emoji label="Heart on Fire" symbol="❤️‍🔥" />
        <a
          target="_blank"
          rel="noreferrer"
          className="purple"
          href="https://www.gatsbyjs.org"
        >
          Gatsby
        </a>{" "}
        +
        <a target="_blank" rel="noreferrer" href="https://tachyons.io/">
          Tachyons
        </a>{" "}
        and{" "}
        <a target="_blank" rel="noreferrer" href="https://www.netlify.com/">
          Netlify
        </a>
      </h3>
      <a
        target="_blank"
        rel="noreferrer"
        className="f6"
        href="https://stories.freepik.com/stop"
      >
        Illustration by Freepik Stories
      </a>
      <p className="mb0 f6">
        "Icon made by Freepik from{" "}
        <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/">
          www.flaticon.com
        </a>
        "
      </p>
    </footer>
  )
}

export default footer
