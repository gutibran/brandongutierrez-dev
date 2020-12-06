module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "goldman\:400,700",
          "roboto\:400,700,900"
        ],
        display: "swap"
      },
    },
    "gatsby-plugin-styled-components"
  ],
}
