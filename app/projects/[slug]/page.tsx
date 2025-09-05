// Next & React
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Utils
import { fetcher } from "@/utils/fetcher";
import { sectionRenderer } from "@/utils/render-section";
import { FALLBACK_SEO } from "@/utils/fallback-seo";

// Components
import HeroProject from "@/app/components/sections/HeroProject";
import TextWithImage from "@/app/components/sections/TextWithImage";
import RelatedProjects from "@/app/components/sections/RelatedProjects";
import Wrapper from "@/app/components/helpers/Wrapper";
import { textBlockRenderer } from "@/utils/render-text-block";



export const revalidate = 0;

// Get meta title & description
export async function generateMetadata({ params }: { params: { slug: string }; }): Promise<Metadata> {
  let requestData = {
    query: `page('projects/${params.slug}')`,
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

  const resp = await fetch(`${process.env.NEXT_PUBLIC_KIRBYCMS_URL}/projects/${params.slug}`, {
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



  // Project textWithImage data
  const textWithImageData = {
    content: {
      textwithimagelabel: data.contentLabel,
      textwithimagetitle: data.contentTitle,
      textwithimagetext: data.contentText,
      textwithimageimage: data.contentImage,
      alttag: data.alttag,
      textwithimageimageplacement: "false",
      bgcolor: "grey",
      aspectSquareMobile: true,
    },
    isHidden: false,
  }



  return (
    <main id="main-content">
      <HeroProject period={data.period} shortTitle={data.shortTitle} description={data.description} urls={data.urls} technologies={data.technologies.technologies} carouselImages={data.carouselImages} />
      <TextWithImage data={textWithImageData} />

      {/* Project body */}
      {Array.isArray(data.projectBodyBlocks) && data.projectBodyBlocks.length > 0 &&
        <section className="pt-12 pb-[72px] lg:pb-[100px] lg:pt-[76px] hd:pb-0">
          <Wrapper className="flex flex-col gap-4 lg:gap-6 hd:pt-0">
            {data.projectBodyBlocks.map((textBlock: any, index: number) => textBlockRenderer(textBlock, index))}
          </Wrapper>
        </section>
      }

      <RelatedProjects data={data.relatedProjects} />

      {data.customBlocks.map((section: any, index: number) => sectionRenderer(section, index))}
    </main>
  )
}