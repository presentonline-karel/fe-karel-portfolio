// Next
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Components
import Header from "../components/sections/Header";
import Projects from "../components/sections/Projects";

// Utils
import { fetcher } from "@/utils/fetcher";
import { FALLBACK_SEO } from "@/utils/fallback-seo";



export const revalidate = 0;

// Get meta title & description
export async function generateMetadata({ params }: { params: { slug: string }; }): Promise<Metadata> {
  let requestData = {
    query: `page('projects')`,
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



export default async function ProjectsPage() {

  /* Fetch project info */
  const username = `${process.env.NEXT_PUBLIC_KIRBYCMS_EMAIL}`;
  const password = `${process.env.NEXT_PUBLIC_KIRBYCMS_PASSWORD}`;

  const headers = {
    Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const resp = await fetch(`${process.env.NEXT_PUBLIC_KIRBYCMS_URL}/projects`, {
    method: "GET",
    mode: 'no-cors',
    headers,
  });



  // If data is not correct JSON -> 404 page
  let data;
  try {
    data = await resp.json();
  } catch (jsonError: any) {
    console.log('Error parsing JSON: ' + jsonError.message);
  }

  if(data == undefined) {
    notFound();
  }



  // Projects header data
  const headerData = {
    content: {
      headertitle: data.projectsTitle,
      headerparagraph: data.projectsParagraph,
    },
    isHidden: false,
  }



  return (
    <main>
      <Header data={headerData} />
      <Projects labelTags={data.labelTags} tags={data.tags} projects={data.projects} />
    </main>
  )
}