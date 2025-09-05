// Next & React
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Utils
import { fetcher } from "@/utils/fetcher";
import { sectionRenderer } from "@/utils/render-section";
import { FALLBACK_SEO } from "@/utils/fallback-seo";



export const revalidate = 0;

/* Get meta title & description
export async function generateMetadata({ params }: { params: { slug: string }; }): Promise<Metadata> {
  let requestData = {
    query: `page('${params.slug}')`,
    select: {
      "metaTitle": true,
      "metaDescription": true,
    }
  }

  const resp = await fetcher(requestData.query, requestData.select);

  if (!resp || resp.length === 0) {
    return FALLBACK_SEO;
  }

  return {
    title: resp.metaTitle,
    description: resp.metaDescription,
  }
} */



// Return page
export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const awaitedParams = await params;

  let data;

  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_KIRBYCMS_URL}/${awaitedParams.slug}`,
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

  return (
    <main id="main-content">
      {data.customPageContent.map((section: any, index: number) => sectionRenderer(section, index))}
    </main>
  )
}