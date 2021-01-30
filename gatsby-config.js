module.exports = {
    siteMetadata: {
        title: `Chuck Hutchins`,
        description: `Chuck Hutchins is a design-oriented front-end developer from the Metro Detroit area.`,
        author: `Chuck Hutchins`,
        siteUrl: `https://chuckhutchins.com`
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `books`,
                path: `${__dirname}/src/pages/media-consumption/books`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `video-games`,
                path: `${__dirname}/src/pages/media-consumption/video-games`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#111111`,
                theme_color: `#111111`,
                display: `minimal-ui`,
                icon: `src/images/icon-checkers.png`,
            },
        },
        `gatsby-plugin-mdx`,
    ],
}
