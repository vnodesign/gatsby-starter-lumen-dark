// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            share
            author {
              name
              bio
              photo
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
