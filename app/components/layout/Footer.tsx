// Components
import Image from "next/image";
import Wrapper from "../helpers/Wrapper";

// Utils
import { fetcher } from "@/utils/fetcher";
import { getKirbyFiles } from "@/utils/helper-functions";



export default async function Footer() {

  // Fetch KirbyCMS data
  let requestData = {
    query: "site",
    select: {
      "logoDark": true,
      "footerInfoParagraph": true,
      "footerMainLinksTitle": true,
      "footerMainLinks": true,
      "footerServicesTitle": true,
      "footerServices": true,
      "email": true,
      "phone": true,
    }
  }

  const resp = await fetcher(requestData.query, requestData.select);
  console.log("resp", resp);
  // console.log("resp parsed ->", JSON.parse(resp.result));

  return (
    <footer className="">
      <Wrapper className="">

        {/* Mobile */}
        <div className="">

          {/* Top */}
          <div className="">
            <div className="">

              {/* Logo */}
              <div className="relative w-[120px] h-11">
                <Image
                  src={getKirbyFiles(resp.result.logoDark[0])}
                  alt="test"
                  fill={true}
                  className="object-contain"
                />
              </div>

              {/* Socials */}
              <div>

              </div>
            </div>

            <p className="p">
              {resp.result.footerInfoParagraph}
            </p>

            <div>
              {resp.result.footerServicesTitle}
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}