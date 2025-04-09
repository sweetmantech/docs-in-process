import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Docs',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Add token to existing collection',
      link: '/add-token.mdx',
    },
    {
      text: 'Protocol Deployments',
      link: '/protocol-deployments',
    },
  ],
})
