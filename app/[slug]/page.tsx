// Next & React
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Utils
import { fetcher } from "@/utils/fetcher";
import { sectionRenderer } from "@/utils/render-section";
import { FALLBACK_SEO } from "@/utils/fallback-seo";



export const revalidate = 0;

// Get meta title & description
export async function generateMetadata({ params }: { params: { slug: string }; }): Promise<Metadata> {
  let requestData = {
    query: `page('${params.slug}')`,
    select: {
      "metaTitle": true,
      "metaDescription": true,
    }
  }

  const resp = await fetcher(requestData.query, requestData.select);

  if (!resp.result || resp.result.length === 0) {
    return FALLBACK_SEO;
  }

  return {
    title: resp.result.metaTitle,
    description: resp.result.metaDescription,
  }
}



// Return page
export default async function Page({ params }: { params: { slug: string; } }) {

  // Fetch KirbyCMS data
  let requestData = {
    query: `page('${params.slug}')`,
    select: {
      "customPageContent": true,
    }
  }

  const resp = await fetcher(requestData.query, requestData.select);

  if (!resp.result || resp.result.length === 0) {
    notFound();
  }

  return JSON.parse(resp.result.customPageContent).map((section: any, index: number) => sectionRenderer(section, index));
}