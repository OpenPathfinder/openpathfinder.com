require('dotenv').config();

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenPathfinder',
  tagline: 'Guiding Open Innovation with Security and Clarity',
  favicon: 'img/favicon.ico',
  url: 'https://openpathfinder.com',
  baseUrl: '/',
  organizationName: 'openPathfinder',
  projectName: 'openpathfinder.com',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      "@orama/plugin-docusaurus-v3",
      {
        analytics: {
          enabled: true,
          apiKey: process.env.ORAMA_CLOUD_PRIVATE_API_KEY || '',
          indexId: process.env.ORAMA_CLOUD_INDEX_ID || '',
          deploy: process.env.ENABLE_ORAMA_CLOUD_DEPLOY === 'true',
        },
        searchbox: {
          placeholder: "Search...",
        },
        searchButton: {
          text: "Click here to search..."
        }
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/openPathfinder/openpathfinder.com/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/openPathfinder/openpathfinder.com/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false
      },
      image: 'img/openPathfinder-social-card.jpg',
      navbar: {
        title: 'OpenPathfinder',
        logo: {
          alt: 'OpenPathfinder Logo',
          src: 'img/openPathfinder_profile.png',
        },
        style: 'dark',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/docs/projects/fortSphere', label: 'fortSphere', position: 'left'},
          // {to: '/docs/projects/visionBoard', label: 'visionBoard', position: 'left'},
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/contribute', label: 'Contribute', position: 'left' },
          { to: '/support', label: 'Support', position: 'left' },
          {
            href: 'https://github.com/openPathfinder/openpathfinder.com',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Ulises Gascón. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
