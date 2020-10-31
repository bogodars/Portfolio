import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            title
            headerTitle
            description
            author {
              name
            }
            sections
            favicon
            logo
            menuItems {
              path
              label
            }
            social {
              name
              url
              fa
            }
            footer {
              text
              logo
            }
            address {
              line1
              line2
              line3
            }
            contacts {
              text
              url
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
