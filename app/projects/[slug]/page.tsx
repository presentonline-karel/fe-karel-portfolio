// Next & React
import { notFound } from "next/navigation";

// Utils
import { fetcher } from "@/utils/fetcher";
import { sectionRenderer } from "@/utils/render-section";

// Components
import HeroProject from "@/app/components/sections/HeroProject";

// Get fresh data
export const revalidate = 0;



// Return page
export default async function Page({ params }: { params: { slug: string; } }) {

  // Fetch project info
  const username = `${process.env.NEXT_PUBLIC_KIRBYCMS_EMAIL}`;
  const password = `${process.env.NEXT_PUBLIC_KIRBYCMS_PASSWORD}`;

  const headers = {
    Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const resp = await fetch(`http://be-karel-portfolio.int/projects/${params.slug}`, {
    method: "GET",
    mode: 'no-cors',
    headers,
  });

  const data = await resp.json();
  console.log("respProject", data);



  return (
    <div>
      Placeholder

      <HeroProject period={data.period} shortTitle={data.shortTitle} description={data.description} urls={data.urls} technologies={data.technologies.technologies} carouselImages={data.carouselImages} />
    </div>
  )
}