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
      query: "page('projects').children",
      select: {
        "url": true,
        "longTitle": true,
        "description": true
      }
    }),
    headers,
  });

  const json = await response.json();
  console.log(json);

  return (
    <div className="w-full">
      <h1 className="h h1">H1 test title</h1>
      <h2 className="h h2">H2 test title</h2>
      <h3 className="h h3">H3 test title</h3>
      <h4 className="h h4">H4 test title</h4>
      <h5 className="h h5">H5 test title</h5>
      <h6 className="h h6">H6 test title</h6>

      <button className="btn btn-primary">
        Home
      </button>
    </div>
  )
}
