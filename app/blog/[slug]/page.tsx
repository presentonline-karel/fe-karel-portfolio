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
  
    const resp = await fetch(`http://be-karel-portfolio.int/blog/${params.slug}`, {
      method: "GET",
      mode: 'no-cors',
      headers,
    });
  
    const data = await resp.json();
    console.log("respBlogDetail", data);
  
  
  
    return (
      <main>
        <h1 className="h h1">Karel</h1>
      </main>
    )
  }