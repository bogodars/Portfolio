import React, { useState, useEffect } from "react"
import { ProfileCard } from "../components/StyledComponents"
import { projectItems } from "../components/store"
import styled from "tachyons-components"

export const Button = styled("button")`
link bg-light-green center tc mr2 pa1
`
Button.displayName = "Button"

export const Text = styled("p")`flex mr2`
Text.displayName = "Text"

function Work() {
  const [filter, setFilter] = useState("all")
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(projectItems)
  }, [])

  useEffect(() => {
    setProjects([])

    setTimeout(() => {
      const filtered = projectItems.map(port => ({
        ...port,
        filtered: port.category.includes(filter),
      }))
      setProjects(filtered)
    }, 0)
  }, [filter])
  return (
    <div id="work">
      <h4 className="pt0 pt5-m  tc f3 ml3">Projects</h4>
      <div className="App tc">
        <div className="portfolio__labels mb5 db">
          <Button
            onClick={e => {
              e.preventDefault()
              setFilter("all")
            }}
          >
            All
          </Button>
          <Button
            onClick={() => {
              setFilter("web")
            }}
          >
            Web
          </Button>
          <Button
            onClick={() => {
              setFilter("full-stack")
            }}
          >
            Full-stack
          </Button>
          <Button
            onClick={() => {
              setFilter("app")
            }}
          >
            App
          </Button>
        </div>
        <div className="portfolio__container flex flex-wrap ">
          {projects.map((item, key) =>
            item.filtered === true ? (
              <ProfileCard
                key={key}
                name={item.name}
                title={item.title}
                image={item.image}
                className="border-box"
                exerpt={item.exerpt}
                git={item.git}
                url={item.url}
                tag={item.tag}
                click_git="Git"
                click_url="Url"
                sans-serif
                mb0-l
                mb2
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  )
}
export default Work
