import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  const response = await fetch("https://api.spacexdata.com/v4/capsules");
  const capsules = await response.json();

  const fields= capsules.map((capsule) => ({
    loc: `https://www.capsules.com/capsules/${capsule.id}`,
    lastmod: new Date().toISOString(),
  }));

  console.log(fields);

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}