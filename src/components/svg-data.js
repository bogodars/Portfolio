import React from "react"

import {
  FaReact,
  FaNpm,
  FaHtml5,
  FaSass,
  FaBootstrap,
  FaGulp,
} from "react-icons/fa"
import { DiNodejs, DiHeroku, DiMongodb, DiVisualstudio } from "react-icons/di"
import { SiPostman, SiJavascript, SiFirebase, SiGatsby } from "react-icons/si"
import { AiFillGithub } from "react-icons/all"
function svgData() {
  return (
    <div className=" f2 pointer">
      <FaReact className="mr2 blue  grow" title="React" />
      <FaSass className="mr2 pink grow" title="Sass" />
      <FaNpm className="mr2 red grow" title="Npm" />
      <FaHtml5 className="mr2 orange grow" title="Html" />
      <DiNodejs className="mr2 green grow" title="Node" />
      <DiHeroku className="mr2 purple grow" title="Heroku" />
      <SiPostman className="mr2 orange grow" title="Postman" />
      <SiJavascript className="mr2 yellow grow" title="Javascript" />
      <FaBootstrap className="mr2 blue grow" title="Bootstrap" />
      <AiFillGithub className="mr2 red grow" title="Git" />
      <DiMongodb className="mr2 green grow" title="Mongodb" />
      <SiFirebase className="mr2 yellow grow" title="Firabase" />
      <DiVisualstudio className="mr2 blue grow" title="Visual studio code" />
      <FaGulp className="mr2 red grow" title="Gulp" />
      <SiGatsby className="mr2 purple grow" title="Gatsby" />
    </div>
  )
}

export default svgData
