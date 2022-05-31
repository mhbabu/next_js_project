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
