import React from "react"

const Emoji = props => (
  <span
    style={{ position: "absolute", top: "4px" }}
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
)
export default Emoji
