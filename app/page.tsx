// Next
import { notFound } from "next/navigation";



export default async function Home() {
  const api = `${process.env.NEXT_PUBLIC_KIRBYCMS_URL}`;
  const username = `${process.env.NEXT_PUBLIC_KIRBYCMS_EMAIL}`;
  const password = `${process.env.NEXT_PUBLIC_KIRBYCMS_PASSWORD}`;

  const headers = {
    Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const resp = await fetch(api, {
    method: "post",
    body: JSON.stringify({
      query: "page('home')",
      select: {
        "customPageHeader": true,
        "customPageContent": true,
      }
    }),
    headers,
  });

  const json = await resp.json();
  console.log(json);

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