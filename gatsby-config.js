module.exports = {
    pathPrefix: '/blog',
    siteMetadata: {
        title: 'A Web Log'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`
            }
        }
    ]
};
