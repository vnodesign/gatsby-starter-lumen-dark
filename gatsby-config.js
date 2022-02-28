'use strict';

const siteConfig = require('./config.js');
const postCssPlugins = require('./postcss-config.js');

module.exports = {
  pathPrefix: siteConfig.pathPrefix,
  siteMetadata: {
    url: siteConfig.url,
    siteUrl: siteConfig.url,
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    description: siteConfig.description,
    copyright: siteConfig.copyright,
    facebookComment: siteConfig.facebookComment,
    menu: siteConfig.menu,
    author: siteConfig.author,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                site_url: url
                title
                description: description
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => allMarkdownRemark.edges.map((edge) => ({
              ...edge.node.frontmatter,
              description: edge.node.frontmatter.description,
              date: edge.node.frontmatter.date,
              url: site.siteMetadata.site_url + edge.node.fields.slug,
              guid: site.siteMetadata.site_url + edge.node.fields.slug,
              custom_elements: [
                {
                  'content:encoded': `${edge.node.frontmatter.description}`,
                },
              ],
            })),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        template
                        draft
                        thumbnail
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              include: ['images'],
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              withWebp: true,
              quality: 80,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin: 0 1.0725rem' },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          'gatsby-remark-smartypants',
          'gatsby-remark-external-links',
          `gatsby-plugin-remove-fingerprints`,
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [siteConfig.googleAnalyticsId],
        pluginConfig: {
          head: true
        }
      }
    },
    'gatsby-plugin-advanced-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#fe2c55',
        display: 'standalone',
        icon: 'static/tuanducdesign.jpg',
        cache_busting_mode: 'none',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [...postCssPlugins],
        cssLoaderOptions: {
          camelCase: false,
        },
        // Override the file regex for Sass
        sassRuleTest: /\.s(a|c)ss$/,
        // Override the file regex for CSS modules
        sassRuleModulesTest: /\.module\.s(a|c)ss$/,
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-4183134625750063`
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-flow',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://pagead2.googlesyndication.com', 'https://www.googletagmanager.com', 'https://connect.facebook.net', 'https://www.facebook.com', 'https://static.xx.fbcdn.net', 'https://www.google-analytics.com', 'https://www.google.com'],
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://tuanducdesign.com`,
      },
    },
    `gatsby-plugin-preact`
  ],
};
