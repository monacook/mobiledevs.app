module.exports = {
  siteMetadata: {
    title: "MobileDevs",
    author: "Mona Cook",
    description: "A Gatsby.js V2 Starter based on Dimension by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/mobiledevs.png', // This path is relative to the root of the site.
        pathPrefix: "/mobiledevs.app",
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
