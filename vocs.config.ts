import { defineConfig } from "vocs";

export default defineConfig({
  title: "In Process",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Protocol Deployments",
      link: "/protocol-deployments",
    },
    {
      text: "Setup Actions",
      link: "/setup-actions",
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
      text: "Timeline",
      items: [
        {
          text: "Quickstart",
          link: "/timeline",
        },
      ],
    },
    {
      text: "Moment",
      items: [
        {
          text: "Create a Moment",
          link: "/moment/create",
        },
      ],
    },
  ],
});
