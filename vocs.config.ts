import { defineConfig } from "vocs";

export default defineConfig({
  title: "In Process",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Timeline",
      items: [
        {
          text: "Browsing the Timeline",
          link: "/timeline",
        },
      ],
    },
    {
      text: "Moment",
      items: [
        {
          text: "Creating a Moment",
          link: "/moment/create",
        },
        {
          text: "Creating a Writing Moment",
          link: "/moment/create/writing",
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
