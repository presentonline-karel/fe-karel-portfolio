// Next & React
import { notFound } from "next/navigation";

// Utils
import { fetcher } from "@/utils/fetcher";
import { sectionRenderer } from "@/utils/render-section";

// Get fresh data
export const revalidate = 0;



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