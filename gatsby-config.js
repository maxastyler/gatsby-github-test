module.exports = {
    pathPrefix: "/gatsby-github-test",
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "Gatsby Github Test",
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "UA-190713477-1",
            },
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                gatsbyRemarkPlugins: [
                    { resolve: "gatsby-remark-images", options: {} }
                ]
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "blog",
                path: "./blog/",
            },
            __key: "blog",
        },
    ],
};
