// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              cover
              contacts {
                email
                twitter
                github
                rss
                facebook
              }
            }
            menu {
              label
              path
            }
            url
            title
            subtitle
            copyright
            facebookComment {
              active
              appId
            }
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
