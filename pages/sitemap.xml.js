// import React from "react";
// import fs from "fs";

// const Sitemap = () => {};

// export const getServerSideProps = ({ res }) => {
//   const baseUrl = {
//     development: "http://localhost:5000",
//     production: "https://mydomain.com",
//   }[process.env.NODE_ENV];

//   const staticPages = fs
//     .readdirSync("pages")
//     .filter((staticPage) => {
//       return ![
//         "_app.js",
//         "_document.js",
//         "_error.js",
//         "sitemap.xml.js",
//       ].includes(staticPage);
//     })
//     .map((staticPagePath) => {
//       return `${baseUrl}/${staticPagePath}`;
//     });

//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//       ${staticPages
//         .map((url) => {
//           return `
//             <url>
//               <loc>${url}</loc>
//               <lastmod>${new Date().toISOString()}</lastmod>
//               <changefreq>monthly</changefreq>
//               <priority>1.0</priority>
//             </url>
//           `;
//         })
//         .join("")}
//     </urlset>
//   `;

//   res.setHeader("Content-Type", "text/xml");
//   res.write(sitemap);
//   res.end();

//   return {
//     props: {},
//   };
// };

// export default Sitemap;



import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  const response = await fetch("http://dbl-back.test/api/pages");
  const pages = await response.json();

  const fields = pages.map((page) => ({
    loc: `https://dblceramics.com/en/${page.template_name}`,
    lastmod: `${page.updated_at}`,
  }));

  console.log(fields);

  const siteMapItems = getServerSideSitemap(ctx, fields);
  return { props: { siteMapItems } };
};

export default function Site() {}
