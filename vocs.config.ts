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
          text: "Browsing the Timelines",
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
          text: "Creating a Written Moment",
          link: "/moment/create/writing",
        },
        {
          text: "Collect a Moment",
          link: "/moment/collect",
        },
        {
          text: "Airdrop a Moment",
          link: "/moment/airdrop",
        },
        {
          text: "SalesConfig",
          link: "/moment/create/salesConfig",
        },
        {
          text: "Get Comments",
          link: "/moment/comments",
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
      text: "Notifications",
      items: [
        {
          text: "Browsing the Notifications",
          link: "/notifications",
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
    {
      text: "Artists",
      items: [
        {
          text: "Get an Artist Wallet",
          link: "/artists/wallets",
        },
        {
          text: "Connect a Social Wallet",
          link: "/artists/wallets/connect",
        },
        {
          text: "Disconnect a Social Wallet",
          link: "/artists/wallets/disconnect",
        },
        {
          text: "Create an Artist API Key",
          link: "/artists/api-keys/create",
        },
      ],
    },
    {
      text: "Smart Wallet",
      items: [
        {
          text: "Get a Smart Wallet",
          link: "/smartwallet/get",
        },
      ],
    },
  ],
});
