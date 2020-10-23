module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-podcast-feed-mdx",
      // Metadata for podcast
      options: {
        title: "Brandon Gutierrez Podcast",
        subtitle: "null subtitle",
        description: "null description",
        summary: "null summary",
        podcastType: "episodic",
        siteUrl: "https://brandongutierrez.dev",
        imageUrl: "https://brandon-gutierrez-podcast-cover.s3.us-east-2.amazonaws.com/test-cover.png",
        feedUrl: "https://brandongutierrez.dev/podcast-rss-feed.xml",
        language: "en-us",
        copyright: "Copyright 2020 Brandon Gutierrez",
        authorName: "Brandon Gutierrez",
        ownerName: "Brandon Gutierrez",
        ownerEmail: "bagfloat09@@gmail.com",
        managingEditor: "bagfloat09@@gmail.com",
        webMaster: "bagfloat09@@gmail.com",
        explicit: "True",
        publicationDate: "Wed Oct 21 23:55:29 CDT 2020",
        category1: "Technology",
        subCategory1: "Computer Science",
        timeToLive: "60",
        outputPath: "/podcast-rss-feed.xml",
      }
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "episodes",
        path: `${__dirname}/content/episodes`,
      }
    }
  ],
}
