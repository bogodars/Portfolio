import React from "react"
import "tachyons"
import { ThemeContext } from "./ThemeContext"
import Header from "./header"
import Footer from "./footer"
import { setConfig } from "react-hot-loader"
import styled from "@emotion/styled"
import "../css/custom.css"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "../hooks/use-site-metadata"

// allow properly work for smooth-crolling to the mouth button
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const themes = {
  light: {
    foreground: "inherit",
    background: "inherit",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
}

const ThemedLayout = styled.div`
  color: ${props => themes[props.theme.name].foreground};
  background-color: ${props => themes[props.theme.name].background};
  transition: all 0.4s ease;
  min-height: 100vh;

  & a,
  .nav-ul,
  h3,
  .blog-a,
  button,
  .clear {
    color: ${props => (props.theme.name === "dark" ? "#fff" : "inherit")};
  }
  & .purple {
    color: ${props => (props.theme.name === "dark" ? "#5e2ca5" : "#5e2ca5")};
  }
  & .current {
    background-color: ${props =>
      props.theme.name === "dark" ? "#000000" : "inherit"};
  }
  & .btn-tog {
    border: ${props =>
      props.theme.name === "dark" ? "1px #fff solid" : "1px black solid"};
  }
  & .green {
    color: ${props => (props.theme.name === "dark" ? "#19a974" : "#19a974")};
  }
`

setConfig({
  showReactDomPatchNotification: false,
})

export default function Layout({ children }) {
  const { title, description, author, favicon } = useSiteMetadata()
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="author" content={author.name} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="shortcut icon" href={"/" + favicon} type="image/png" />
        <link rel="alternative icon" href="/favicon.ico" type="image/png" />
      </Helmet>

      <ThemeContext.Consumer>
        {theme => (
          <ThemedLayout theme={theme}>
            <Header theme={theme} />
            <div className="mw7 center pt0 pb0 pr3 pl3 garamond">
              {children}
            </div>
            <Footer />
          </ThemedLayout>
        )}
      </ThemeContext.Consumer>
    </>
  )
}
