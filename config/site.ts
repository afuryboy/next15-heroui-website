export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "JiangBao's space",
  description: "这是一个个人网站，主要功能是博客",
  ogImage: "https://cdn.jsdelivr.net/gh/afuryboy/my-pic@main/blog/avatar.png",
  author: "JiangBao",
  email: "",
  siteUrl: "",
  creator: "JiangBao",
  openGraph: {
    type: "website",
    // locale: "en_US",
    url: "https://www.afruyboy.site/",
    siteName: "JiangBao's space",
    description: "这是一个个人网站，主要功能是博客",
    images: [
      {
        url: "https://cdn.jsdelivr.net/gh/afuryboy/my-pic@main/blog/avatar.png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  twitter: {
    card: "",
    title: "",
    description: "",
    image: "",
    creator: "",
  },
  links: {
    github: "",
    twitter: "",
    docs: "",
    discord: "",
    sponsor: "",
    portfolio: "",
  },
};
