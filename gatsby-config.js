/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://tmplgitp.gatsbyjs.io/`,
    title: 'TMPL',
    description: `EMS-тренування в Києві`,
    author: `GoWeb`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to
        languages: [`uk`, `ru`],
        defaultLanguage: `uk`,

        siteUrl: `https://tmplgitp.gatsbyjs.io/`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          // keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TMPL app`,
        short_name: `TMPL`,
        description: `EMS-тренування в Києві`,
        lang: `uk`,
        display: `standalone`,
        icon: `src/images/icon/icon.png`,
        start_url: `/`,
      },
    },
    // `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
