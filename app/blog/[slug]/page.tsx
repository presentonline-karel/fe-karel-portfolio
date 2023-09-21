// Next & React
import Link from "next/link";

// Components
import BlogHeader from "@/app/components/sections/BlogHeader";
import Wrapper from "@/app/components/helpers/Wrapper";

// Utils
import { textBlockRenderer } from "@/utils/render-text-block";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChain } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";



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
      <section className="pb-[72px] lg:pb-[120px] hd:pb-0">
        <Wrapper className="flex flex-col gap-4 lg:gap-6 hd:pt-0">
          {data.blogDetailBlocks.map((textBlock: any, index: number) => textBlockRenderer(textBlock, index))}

          <div className="border-t border-neutrals-400 pt-6 flex justify-between items-center w-full md:max-w-[842px] md:mx-auto lg:pt-8">
            <div className="text-16 leading-6 tracking-tight text-neutrals-1200 lg:text-18 lg:leading-6">
              Share this article
            </div>

            <div className="flex items-center gap-5 lg:gap-6">
              <Link href="https://google.com" target="_blank">
                <FontAwesomeIcon icon={faChain} className="w-5 !h-5 text-neutrals-1300 lg:w-6 lg:!h-6" />
              </Link>

              <Link href="https://google.com" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} className="w-[13px] !h-5 text-neutrals-1300 lg:w-[15px] lg:!h-6" />
              </Link>

              <Link href="https://google.com" target="_blank">
                <FontAwesomeIcon icon={faTwitter} className="w-5 !h-5 text-neutrals-1300 lg:w-6 lg:!h-6" />
              </Link>

              <Link href="https://google.com" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-[18px] !h-5 text-neutrals-1300 lg:w-[21px] lg:!h-6" />
              </Link>
            </div>
          </div>
        </Wrapper>
      </section>
    </main>
  )
}