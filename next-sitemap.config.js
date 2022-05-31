module.exports = {
  siteUrl: process.env.SITE_URL || "https://dblceramics.com/en/",
  generateRobotsTxt: true,
  exclude: ["/secret"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/secret" },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      `${this.siteUrl}/sitemap.xml`,
      `${this.siteUrl}/server-sitemap.xml`,
    ]
  },
};
