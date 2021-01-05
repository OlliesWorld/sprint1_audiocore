require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: "AudioCORE",
    siteUrl: "https://sprint1_audiocoremain.gtsb.io/",
    description: "The world's best (and only) headphone sharing app",
  },
  flags : { DEV_SSR: true },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
