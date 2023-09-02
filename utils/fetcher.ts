export async function fetcher(page: string, select = {}) {

  console.log("page ->", page);
  console.log("select ->", select);

  // KirbyCMS settings
	const api = `${process.env.NEXT_PUBLIC_KIRBYCMS_URL}`;
	const username = `${process.env.NEXT_PUBLIC_KIRBYCMS_EMAIL}`;
	const password = `${process.env.NEXT_PUBLIC_KIRBYCMS_PASSWORD}`;

  // Headers
	const headers = {
		Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
		"Content-Type": "application/json",
		Accept: "application/json",
	};

  // Fetch
	const resp = await fetch(api, {
		method: "post",
		body: JSON.stringify({
			query: page,
			select: select
		}),
		headers,
	});

	const data = await resp.json();
  //console.log("type dataRaw ->", typeof dataRaw);
  //const data = JSON.parse(dataRaw.result.customPageContent);

  //console.log("dataRaw ->", dataRaw);

  //const data = JSON.parse(JSON.stringify(dataRaw, null, 2));

  //console.log("data ->", data);

	return data;
}
