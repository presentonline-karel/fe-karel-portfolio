// Next
import { notFound } from "next/navigation";

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