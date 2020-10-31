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
      { path: "hero", label: "Home" },
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

    /* Logo and text to show in footer */
    footer: {
      logo: `/images/footer-logo.png`,
      text: `This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.`,
    },

    /* Address and contact info to show in footer */
    address: {
      line1: `1600 Amphitheatre Parkway`,
      line2: `Mountain View, CA`,
      line3: `94043 US`,
    },
    contacts: [
      { text: `647.343.8234`, url: `tel:6473438234` },
      { text: `123.456.7890`, url: `tel:1234567890` },
      { text: `someone@woosite.com`, url: `mailto:someone@woo.com` },
    ],
  },
  /* Plugins */
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Nunito`,
            variants: [`400`, `700`, `800`, `900`],
            subsets: [`latin`],
          },
          {
            family: `Rock Salt`,
          },
        ],
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
