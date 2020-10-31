import React from "react"
import Layout from "../components/layout"
import Hero from "./hero"
import About from "./about"
import Contact from "./contact"
import Work from "./work"
import { ThemeProvider } from "../components/ThemeContext"
// export default () => {
//   const { sections } = useSiteMetadata()

//   return (
//     <>
//       <Layout>
// <Hero />
// <Contacts />
//       </Layout>
//     </>
//   )
// }

import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
  const { sections } = useSiteMetadata()

  const availableSections = {
    hero: Hero,
    about: About,
    work: Work,
    contact: Contact,
  }

  return (
    <ThemeProvider>
      <Layout>
        {sections.map((section, index) => {
          let Tagname = availableSections[section]
          return <Tagname key={index} />
        })}
      </Layout>
    </ThemeProvider>
  )
}
