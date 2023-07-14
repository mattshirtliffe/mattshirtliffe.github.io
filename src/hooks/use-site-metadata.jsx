import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          contactEmail
          siteUrl
          social {
            twitter
            facebook
            linkedin
            github
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}
