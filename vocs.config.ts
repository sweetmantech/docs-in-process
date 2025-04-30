import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Docs',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Add to an existing collection',
      link: '/expand-collection.mdx',
    },
    {
      text: 'Protocol Deployments',
      link: '/protocol-deployments',
    },
  ],
})
