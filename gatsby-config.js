/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    contactEmail: `me@matthewshirtliffe.co.uk`,
    author: {
      name: `Matthew Shirtliffe`,
      summary: `Freelance Software Engineer & Co-founder of Studio 200`,
    },
    title: `Matthew Shirtliffe Freelance Full-Stack Software Engineer & Co-founder of Studio 200`,
    description: `Matthew Shirtliffe Freelance Full-Stack Software Engineer & Co-founder of Studio 200`,
    siteUrl: `https://www.matthewshirtliffe.co.uk/`,
    social: {
      twitter: `MShirtliffe`,
      facebook: `mattshirtliffe`,
      linkedin: `matthew-shirtliffe-885746246`,
      github: `mattshirtliffe`,
    },
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}
