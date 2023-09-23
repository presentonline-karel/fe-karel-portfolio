// Next & React
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Components
import BlogHeader from "@/app/components/sections/BlogHeader";
import Wrapper from "@/app/components/helpers/Wrapper";
import BlogFooter from "@/app/components/sections/BlogFooter";
import RelatedBlogs from "@/app/components/sections/RelatedBlogs";

// Utils
import { textBlockRenderer } from "@/utils/render-text-block";
import { fetcher } from "@/utils/fetcher";
import { FALLBACK_SEO } from "@/utils/fallback-seo";
import { sectionRenderer } from "@/utils/render-section";



export const revalidate = 0;

// Get meta title & description
export async function generateMetadata({ params }: { params: { slug: string }; }): Promise<Metadata> {
  let requestData = {
    query: `page('blog/${params.slug}')`,
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



  return (
    <main>
      <BlogHeader blogTitle={data.blogTitle} blogIntro={data.blogIntro} publishDate={data.publishDate} minutesRead={data.minutesRead} />

      {/* blogBody + footer */}
      <section className="pb-[72px] lg:pb-[120px] hd:pb-0">
        <Wrapper className="flex flex-col gap-4 lg:gap-6 hd:pt-0">
          {data.blogDetailBlocks.map((textBlock: any, index: number) => textBlockRenderer(textBlock, index))}

          <BlogFooter />
        </Wrapper>
      </section>

      <RelatedBlogs data={data.relatedBlogs} />
      {data.customBlocks.map((section: any, index: number) => sectionRenderer(section, index))}
    </main>
  )
}