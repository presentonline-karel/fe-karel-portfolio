// Next
import { notFound } from "next/navigation";

// Components
import Header from "../components/sections/Header";
import PlaygroundProjects from "../components/sections/PlaygroundProjects";



export default async function PlaygroundPage() {

  /* Fetch project info */
  const username = `${process.env.NEXT_PUBLIC_KIRBYCMS_EMAIL}`;
  const password = `${process.env.NEXT_PUBLIC_KIRBYCMS_PASSWORD}`;

  const headers = {
    Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const resp = await fetch(`${process.env.NEXT_PUBLIC_KIRBYCMS_URL}/playground`, {
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

  if (data == undefined) {
    notFound();
  }



  // Projects header data
  const headerData = {
    content: {
      headertitle: data.playgroundTitle,
      headerparagraph: data.playgroundParagraph,
    },
    isHidden: false,
  }



  return (
    <main id="main-content">
      <Header data={headerData} />
      <PlaygroundProjects labelTags={data.labelTags} tags={data.tags} projects={data.playgroundProjects} />
    </main>
  )
}