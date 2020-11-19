/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Bogodar Shmyglyk's website`,
    headerTitle: `BS`,
    author: {
      name: `Bogodar Shmyglyk`,
    },
    description: `Bogodar Shmyglyk's Portfolio`,
    background: "#FFFFFF",
    backgroundDark: "#f0e6f6",
    text: "#333333",
    primary: "#7c37ad",
    primaryLight: "#ae66df",
    primaryDark: "#4b007d",
    secondary: "#ff4081",
    secondaryLight: "#ff79b0",
    secondaryDark: "#c60055",
    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [`hero`, `about`, `work`, `contact`],

    /* Configure the navigation menu */
    menuItems: [
      { path: "home", label: "Home" },
      { path: "about", label: "About" },
      { path: "work", label: "Work" },
      { path: "contact", label: "Contact" },
    ],

    /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
    social: [
      {
        name: `Facebook`,
        url: `https://www.facebook.com/Bog.Shm/`,
        fa: `facebook`,
      },
      {
        name: `Twitter`,
        url: `https://twitter.com/mufepevaqyh`,
        fa: `twitter`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/bogodars`,
        fa: `github`,
      },
      {
        name: `Skype`,
        url: `skype:ro4ester?add`,
        fa: `skype`,
      },
    ],
    /* Path to favicon and logo (located inside the 'static' folder) */
    favicon: `favicon.png`,
    logo: `/images/logo.png`,
  },
  /* Plugins */
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Rock Salt`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
          omitKeys: [
            "xmlnsDc",
            "xmlnsCc",
            "xmlnsRdf",
            "xmlnsSvg",
            "xmlnsSodipodi",
            "xmlnsInkscape",
          ],
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          `gatsby-remark-lazy-load`,
        ],
      },
    },
    `gatsby-plugin-smoothscroll`,
    `react-scrollspy`,
    `gatsby-plugin-emotion`,
  ],
}
