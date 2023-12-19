const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

function readingTimeMDXPlugin({ variable = 'readingTime', additionalTimePerImage = 1 } = {}) {
  return async function transformer(tree, vfile) {
    const readingTime = require('reading-time')
    const { u } = await import('unist-builder')
    const visit = require('unist-util-visit')

    let imageCount = 0
    visit(tree, 'jsx', node => {
      if (node.value.includes('img')) {
        imageCount++
      }
    })

    const baseReadingTime = readingTime(vfile.contents).minutes
    const adjustedReadingTime = baseReadingTime + imageCount * additionalTimePerImage

    tree.children.unshift(u('export', { value: `const ${variable} = '${adjustedReadingTime}';` }))
  }
}

async function createconfig() {
  const { remarkKroki } = await import('remark-kroki')

  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: 'OKP4 Docs',
    tagline: 'Unleash the Knowledge Economy 🚀',
    url: 'https://okp4.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'OKP4',
    projectName: 'docs',
    deploymentBranch: 'gh-pages',
    trailingSlash: false,

    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'fr']
    },

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            editUrl: ({ docPath }) => `https://github.com/okp4/docs/edit/main/docs/${docPath}`,
            remarkPlugins: [
              readingTimeMDXPlugin,
              require('remark-math'),
              require('mdx-mermaid'),
              [
                remarkKroki,
                {
                  server: 'https://kroki.io/',
                  output: 'inline-svg',
                  alias: ['plantuml', 'structurizr', 'bpmn', 'graphviz']
                }
              ]
            ],
            rehypePlugins: [require('rehype-katex')],
            routeBasePath: '/'
          },
          blog: false,
          theme: {
            customCss: require.resolve('./src/scss/custom.scss')
          }
        })
      ]
    ],
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous'
      }
    ],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: '',
          logo: {
            alt: 'OKP4 Logo',
            src: 'img/okp4-logo-light.svg',
            srcDark: 'img/okp4-logo-dark.svg'
          },
          items: [
            {
              to: '/whitepaper/abstract',
              position: 'left',
              label: 'Whitepaper',
              activeBasePath: '/whitepaper'
            },
            {
              to: '/nodes/introduction',
              position: 'left',
              label: 'Nodes & Validators',
              activeBasePath: '/nodes'
            },
            {
              to: '/technical-documentation/overview',
              position: 'left',
              label: 'Technical documentation',
              activeBasePath: '/technical-documentation'
            },
            {
              to: '/tutorials/overview',
              position: 'left',
              label: 'Tutorials',
              activeBasePath: '/tutorials'
            },
            {
              to: '/faq',
              position: 'left',
              label: 'FAQ',
              activeBasePath: '/faq'
            },
            {
              href: 'https://chat.openai.com/g/g-zUzcYmVbX-okp4-druid-oracle-beta',
              position: 'left',
              label: 'OKP4 GPT'
            },
            {
              type: 'docsVersionDropdown',
              position: 'right',
              dropdownItemsAfter: [{ to: '/contracts/', label: 'Latest version' }],
              docsPluginId: 'contracts',
              dropdownActiveClassDisabled: true
            },
            {
              type: 'docsVersionDropdown',
              position: 'right',
              dropdownItemsAfter: [{ to: '/predicates/predicates', label: 'Latest version' }],
              docsPluginId: 'predicates',
              dropdownActiveClassDisabled: true
            },
            {
              type: 'docsVersionDropdown',
              position: 'right',
              dropdownItemsAfter: [{ to: '/modules/logic', label: 'Latest version' }],
              docsPluginId: 'modules',
              dropdownActiveClassDisabled: true
            },
            {
              type: 'docsVersionDropdown',
              position: 'right',
              dropdownItemsAfter: [{ to: '/commands/okp4d', label: 'Latest version' }],
              docsPluginId: 'commands',
              dropdownActiveClassDisabled: true
            },
            {
              href: 'https://discord.gg/okp4',
              position: 'right',
              className: 'header-discord-link',
              'aria-label': 'Discord'
            },
            {
              href: 'https://github.com/okp4',
              position: 'right',
              className: 'header-github-link',
              'aria-label': 'GitHub repository'
            }
          ]
        },
        footer: {
          style: 'dark',
          logo: {
            alt: 'OKP4 Logo',
            src: 'img/logo-white-horizontal.webp',
            href: 'https://okp4.network',
            width: 160,
          },
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Whitepaper',
                  to: '/whitepaper/abstract'
                },
                {
                  label: 'Nodes & Validators',
                  to: '/nodes/introduction'
                },
                {
                  label: 'Technical documentation',
                  to: '/technical-documentation/overview'
                },
                {
                  label: 'Tutorials',
                  to: '/tutorials/overview'
                },
                {
                  label: 'FAQ',
                  to: '/faq'
                }
              ]
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Discord',
                  href: 'https://discord.gg/okp4'
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/OKP4_Protocol'
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/okp4'
                },
                {
                  label: 'Telegram',
                  href: 'https://t.me/okp4network'
                }
              ]
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Medium',
                  href: 'https://blog.okp4.network/'
                },
                {
                  label: 'OKP4.network',
                  href: 'https://okp4.network'
                },
                {
                  label: 'OKP4 GPT',
                  href: 'https://chat.openai.com/g/g-zUzcYmVbX-okp4-druid-oracle-beta'
                }
              ]
            }
          ],
          copyright: `Copyright © ${new Date().getFullYear()} OKP4`
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ['prolog']
        },
        colorMode: {
          defaultMode: 'dark'
        },
        docs: {
          sidebar: {
            hideable: false,
            autoCollapseCategories: true
          }
        }
      }),
    plugins: [
      'docusaurus-plugin-sass',
      ['drawio', {}],
      [
        '@easyops-cn/docusaurus-search-local',
        {
          hashed: true,
          docsRouteBasePath: '/'
        }
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'contracts',
          path: 'contracts',
          routeBasePath: 'contracts/'
        }
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'predicates',
          path: 'predicates',
          routeBasePath: 'predicates/'
        }
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'modules',
          path: 'modules',
          routeBasePath: 'modules/'
        }
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'commands',
          path: 'commands',
          routeBasePath: 'commands/'
        }
      ]
    ],
    scripts: ['/js/matomo.js', '/js/redirect.js']
  }

  return config
}

module.exports = createconfig
