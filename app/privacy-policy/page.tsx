// Next & React
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Components
import Wrapper from "@/app/components/helpers/Wrapper";

// Utils
import { textBlockRenderer } from "@/utils/render-text-block";
import { fetcher } from "@/utils/fetcher";
import { FALLBACK_SEO } from "@/utils/fallback-seo";



export const revalidate = 0;

// Get meta title & description
export async function generateMetadata(): Promise<Metadata> {
  let requestData = {
    query: `page('privacy-policy')`,
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
export default async function Page() {

  // Fetch project info
  const username = `${process.env.NEXT_PUBLIC_KIRBYCMS_EMAIL}`;
  const password = `${process.env.NEXT_PUBLIC_KIRBYCMS_PASSWORD}`;

  const headers = {
    Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const resp = await fetch(`http://be-karel-portfolio.int/privacy-policy`, {
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
      <section className="pt-[157px] lg:pt-[221px] xl:pt-0 pb-[72px] lg:pb-[120px] hd:pb-0">
        <Wrapper className="flex flex-col gap-4 lg:gap-6 xl:!pt-[257px] hd:pt-0">
          <h1 className="h h1 md:w-[842px] md:mx-auto">Privacy policy</h1>
          {data.privacyPolicyContent.map((textBlock: any, index: number) => textBlockRenderer(textBlock, index))}
        </Wrapper>
      </section>
    </main>
  )
}