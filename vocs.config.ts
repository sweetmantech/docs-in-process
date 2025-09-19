import { defineConfig } from "vocs";

export default defineConfig({
  title: "In Process",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Timelines",
      items: [
        {
          text: "Browsing the Timeline",
          link: "/timeline",
        },
      ],
    },
    {
      text: "Payments",
      items: [
        {
          text: "Browsing the Payments",
          link: "/payments",
        },
      ],
    },
    {
      text: "Moments",
      items: [
        {
          text: "Creating a Moment",
          link: "/moment/create",
        },
        {
          text: "Creating a Writing Moment",
          link: "/moment/create/writing",
        },
        {
          text: "SalesConfig",
          link: "/moment/create/salesConfig",
        },
        {
          text: "Index a Moment",
          link: "/moment/index",
        },
        {
          text: "Upload to Arweave",
          link: "/upload-to-arweave",
        },
      ],
    },
    {
      text: "Coinbase SDK",
      items: [
        {
          text: "Create a Collection",
          link: "/create-collection",
        },
      ],
    },
    {
      text: "Protocol",
      items: [
        {
          text: "Setup Actions",
          link: "/setup-actions",
        },
        {
          text: "Protocol Deployments",
          link: "/protocol-deployments",
        },
      ],
    },
  ],
});
