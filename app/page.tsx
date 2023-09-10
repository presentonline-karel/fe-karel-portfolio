// Next
import { notFound } from "next/navigation";

// Utils
import { fetcher } from "@/utils/fetcher";
import { sectionRenderer } from "@/utils/render-section";



export default async function Home() {

  // Fetch KirbyCMS data
  let requestData = {
    query: "page('home')",
    select: {
      "customPageContent": true,
    }
  }

  const resp = await fetcher(requestData.query, requestData.select);
  console.log("resp", resp);
  //console.log("resp parsed ->", JSON.parse(resp.result.customPageContent));

  if (!resp.result || resp.result.length === 0) {
    notFound();
  }

  return JSON.parse(resp.result.customPageContent).map((section: any, index: number) => sectionRenderer(section, index));
}