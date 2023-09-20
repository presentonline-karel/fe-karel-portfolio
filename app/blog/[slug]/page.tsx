// Components
import BlogHeader from "@/app/components/sections/BlogHeader";
import Wrapper from "@/app/components/helpers/Wrapper";

// Utils
import { textBlockRenderer } from "@/utils/render-text-block";



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
  console.log("blogDetailBlocks", data.blogDetailBlocks);



  return (
    <main>
      <BlogHeader blogTitle={data.blogTitle} blogIntro={data.blogIntro} publishDate={data.publishDate} minutesRead={data.minutesRead} />



      {/* blogBody */}
      <section className="">
        <Wrapper className="flex flex-col gap-4 lg:gap-6 hd:pt-0">
          {data.blogDetailBlocks.map((textBlock: any, index: number) => textBlockRenderer(textBlock, index))}
        </Wrapper>
      </section>
    </main>
  )
}