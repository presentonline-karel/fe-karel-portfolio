// Next
import { notFound } from "next/navigation";

// Utils
import { fetcher } from "@/utils/fetcher";
import { sectionRenderer } from "@/utils/section-renderer";



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
  console.log("resp parsed ->", JSON.parse(resp.result.customPageContent));

  if (!resp.result || resp.result.length === 0) {
    notFound();
  }

  return JSON.parse(resp.result.customPageContent).map((section: any, index: number) => sectionRenderer(section, index));


  return (
    <div className="section">
      <h1 className="h h1">H1 test title</h1>
      <h2 className="h h2">H2 test title</h2>
      <h3 className="h h3">H3 test title</h3>
      <h4 className="h h4">H4 test title</h4>
      <h5 className="h h5">H5 test title</h5>
      <h6 className="h h6">H6 test title</h6>

      <div className="flex gap-2">
        <button className="btn btn-primary">
          Home
        </button>

        <button className="btn btn-secondary">
          Home
        </button>
      </div>

      <div className="label light">Tech stacks I know</div>
      <div className="label dark">Tech stacks I know</div>
    </div>
  )
}