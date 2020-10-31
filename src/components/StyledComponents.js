import React from "react"
import styled from "tachyons-components"

import "../css/custom.css"

export const Text = styled("p")``
Text.displayName = "Text"

export const Heading = styled(({ level = 1, children, ...props }) => {
  return React.createElement("h" + level, props, children)
})``
Heading.displayName = "Heading"

export const Card = styled("article")`
card__article bg-white br2 pa2 ba b--black-10  pointer center w-30-m w-30-l  h-auto
`
Card.displayName = "Card"

export const Avatar = styled("img")`
    h4 w-100 relative 
`
Avatar.displayName = "Avatar"

export const Button = styled("a")`
f5 link dim dib white bg-green pa3 w-50 
`
Button.displayName = "Button"

export const Box = styled("div")``
Box.displayName = "Box"

export const ProfileCard = ({
  name,
  title,
  click_git,
  click_url,
  exerpt,
  image,
  git,
  url,
  tag,
  ...props
}) => {
  const renderCategory = () => {
    if (Array.isArray(tag)) {
      return (
        <>
          {tag.map((t, key) => (
            <Text key={key} className="category__list" mr1 mt0>
              {t}
            </Text>
          ))}
        </>
      )
    }
    return <Text>{tag}</Text>
  }

  return (
    <Card className="Card__box" {...props}>
      <Box relative tc>
        <Avatar src={image} title={`Photo of ${name}`} />
        <Button target="_blank" href={git}>
          {" "}
          {click_git}
        </Button>
        <Button target="_blank" href={url}>
          {" "}
          {click_url}
        </Button>
        <Box className="overlay">
          <Heading level={2} f4 mb2>
            {name}
          </Heading>
          <Text f6 fw4 black mt0 b--black-40 bg-white>
            {exerpt}
          </Text>
          <Box f7 flex flex-wrap ml2 black i>
            {renderCategory()}
          </Box>
        </Box>
      </Box>
    </Card>
  )
}
