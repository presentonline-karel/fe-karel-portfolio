// Components
import BlogHeader from "@/app/components/sections/BlogHeader";



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
      <BlogHeader blogTitle={data.blogTitle} blogIntro={data.blogIntro} publishDate={data.publishDate} minutesRead={data.minutesRead} />
    </main>
  )
}