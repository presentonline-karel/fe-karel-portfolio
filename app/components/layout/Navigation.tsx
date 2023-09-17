// Next & React
import Image from "next/image";
import Link from "next/link";
// import { useState, useEffect } from "react";

// Components
import Wrapper from "../helpers/Wrapper";

// Classnames
import cx from "classnames";

// Utils
import { fetcher } from "@/utils/fetcher";



export default async function Navigation() {

  // States
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [navData, setNavData] = useState<String>();



  /* Fetch footer data
  async function getNavData() {

    // Fetch footer data
    const api = `${process.env.NEXT_PUBLIC_KIRBYCMS_API_URL}`;
    const username = `${process.env.NEXT_PUBLIC_KIRBYCMS_EMAIL}`;
    const password = `${process.env.NEXT_PUBLIC_KIRBYCMS_PASSWORD}`;

    const headers = {
      Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const resp = await fetch("http://be-karel-portfolio.int/", {
      method: "GET",
      mode: 'no-cors',
      headers,
    });

    console.log("respNav", resp);

    const data = await resp.json();
    console.log("respJson", data);
    //console.log("dataFetch", data)
  }



  // Execute get nav data
  useEffect(() => {
    getNavData();
  }, []); */

  const api = `${process.env.NEXT_PUBLIC_KIRBYCMS_API_URL}`;
  const username = `${process.env.NEXT_PUBLIC_KIRBYCMS_EMAIL}`;
  const password = `${process.env.NEXT_PUBLIC_KIRBYCMS_PASSWORD}`;

  const headers = {
    Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const resp = await fetch("http://be-karel-portfolio.int/", {
    method: "GET",
    mode: 'no-cors',
    headers,
  });

  //console.log("respNav", resp);

  const data = await resp.json();
  console.log("respJson Nav", data);



  return (
    <nav className="py-5 bg-neutrals-100 border-b-[0.4px] border-neutrals-400">
      <div className="px-4">

        {/* Top */}
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="relative w-[120px] h-11 xl:w-[154px] xl:h-14">
            {/* <Image
              src={data.logoLight[Object.keys(data.logoLight)[0]].url}
              alt="TEMP karel logo alt message"
              fill={true}
              className="object-contain w-full h-full"
            /> */}
          </Link>

          {/* Hamburger icon */}
          <div
            /* onClick={() => (setMenuOpen(true), console.log("respNav", navData))} */
            className="py-2"
          >
            <div className="w-6 h-2 relative">
              <Image
                src="/Hamburger-menu.png"
                alt="test"
                className="true"
                fill={true}
              />
            </div>
          </div>
        </div>



        {/* Sliding nav */}
        <div className={cx("fixed top-0 right-0 w-[284px] h-full bg-neutrals-1300 py-5 px-4 z-50", {
          /*"translate-x-0": menuOpen === true,
          "translate-x-full": menuOpen === false,*/
        })}>

          {/* Flexbox */}
          <div className="flex flex-col justify-between">

            {/* top */}
            <div className="flex justify-between items-center">

              {/* logo */}
              <div className="relative w-[120px] h-11">
                {/* <Image
                  src={data.logoDark[Object.keys(data.logoDark)[0]].url}
                  alt="TEMP karel logo alt message"
                  fill={true}
                  className="object-contain w-full h-full"
                /> */}
              </div>

              {/* Cross icon */}
              <div
                //onClick={() => setMenuOpen(false)}
                className="w-[18.5px] h-[18.5px] relative"
              >
                <Image
                  src="/Menu-cross.png"
                  alt="test"
                  className="true"
                  fill={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}