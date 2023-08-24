import Image from 'next/image'

export default async function Home() {

  const api = "http://be-karel-portfolio.int/api/query";
  const username = "karel.decoene3@gmail.com";
  const password = "TestKarelPortfolio2023!";

  const headers = {
    Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const response = await fetch(api, {
    method: "post",
    body: JSON.stringify({
      query: "site.children",
    }),
    headers,
  });

  const json = await response.json();
  console.log(json);

  return (
    <div className="w-full bg-slate-500">
      <h1>Test</h1>
    </div>
  )
}
