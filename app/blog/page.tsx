// Next
import { notFound } from "next/navigation";

// Components
import Header from "../components/sections/Header";
import Blogs from "../components/sections/Blogs";

// Utils
import { sectionRenderer } from "@/utils/render-section";



export default async function ProjectsPage() {

  /* Fetch project info */
  const username = `${process.env.NEXT_PUBLIC_KIRBYCMS_EMAIL}`;
  const password = `${process.env.NEXT_PUBLIC_KIRBYCMS_PASSWORD}`;

  const headers = {
    Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const resp = await fetch(`http://be-karel-portfolio.int/blog`, {
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



  // Blog header data
  const headerData = {
    content: {
      headertitle: data.blogsTitle,
      headerparagraph: data.blogsParagraph,
    },
    isHidden: false,
  }



  return (
    <main>
      <Header data={headerData} />
      <Blogs labelTags={data.labelTags} tags={data.tags} blogs={data.blogs} />

      {data.customBlocks.map((section: any, index: number) => sectionRenderer(section, index))}
    </main>
  )
}