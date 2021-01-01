module.exports = {
  siteMetadata: {
    title: "Sprint1_AudioCore",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "YSfdAGFfumzzLdht9F6h8Jo6o1ka72iE3P0YnrBLo1Q",
        spaceId: "azn8blgwc2y2",
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
