// Next
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Utils
import { fetcher } from "@/utils/fetcher";
import { sectionRenderer } from "@/utils/render-section";
import { FALLBACK_SEO } from "@/utils/fallback-seo";



export const revalidate = 0;

// Get meta title & description
export async function generateMetadata(): Promise<Metadata> {
  let requestData = {
    query: "page('home')",
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



/* export default async function Home() {

  // Fetch KirbyCMS data
  let requestData = {
    query: "page('home')",
    select: {
      "customPageContent": true,
    }
  }

  const resp = await fetcher(requestData.query, requestData.select);

  console.log("resp home: ", resp);

  if (!resp.result || resp.result.length === 0) {
    notFound();
  }

  return JSON.parse(resp.result.customPageContent).map((section: any, index: number) => sectionRenderer(section, index));
} */

// Return page
export default async function Home() {
  let data;

  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_KIRBYCMS_URL}/home`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_KIRBY_API_TOKEN}`,
        },
        // Important: this prevents caching (same as revalidate = 0)
        cache: "no-store",
      },
    );

    if (!resp.ok) {
      console.error("Failed to fetch page: ", resp.status);
      notFound(); // Handle 404 or bad resp
    }

    data = await resp.json();

    // You can also validate that the data is in expected shape
    if (!data) {
      // console.error("Invalid data shape: ", data);
      notFound();
    }
  } catch (error) {
    // console.error("Fetch or JSON parse error: ", error);
    notFound();
  }

  return data.customPageContent.map((section: any, index: number) => sectionRenderer(section, index));
}