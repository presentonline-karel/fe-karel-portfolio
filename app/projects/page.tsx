// Next
import { notFound } from "next/navigation";

// Utils
import { fetcher } from "@/utils/fetcher";
import { sectionRenderer } from "@/utils/render-section";

// Components
import Header from "../components/sections/Header";
import Projects from "../components/sections/Projects";



export default async function ProjectsPage() {

  /* Fetch project info */
  const username = `${process.env.NEXT_PUBLIC_KIRBYCMS_EMAIL}`;
  const password = `${process.env.NEXT_PUBLIC_KIRBYCMS_PASSWORD}`;

  const headers = {
    Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const resp = await fetch(`http://be-karel-portfolio.int/projects`, {
    method: "GET",
    mode: 'no-cors',
    headers,
  });

  const data = await resp.json();
  console.log("respProjects", data);



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