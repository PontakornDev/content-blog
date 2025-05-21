import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";
import { constants } from "~/utils/constant";

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: constants.DOMAIN,
  });

  for (const doc of docs) {
    sitemap.write({
      url: "/blog" + doc._path,
      changefreq: "monthly",
    });
  }
  sitemap.end();

  return streamToPromise(sitemap);
});
