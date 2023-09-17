export async function fetcher(page: string, select = {}) {
	// KirbyCMS settings
	const api = `${process.env.NEXT_PUBLIC_KIRBYCMS_API_URL}`;
	const username = `${process.env.NEXT_PUBLIC_KIRBYCMS_EMAIL}`;
	const password = `${process.env.NEXT_PUBLIC_KIRBYCMS_PASSWORD}`;

	// Headers
	const headers = {
		Authorization:
			"Basic " +
			Buffer.from(`${username}:${password}`).toString("base64"),
		"Content-Type": "application/json",
		Accept: "application/json",
	};

	// Fetch
	const resp = await fetch(api, {
		method: "post",
		body: JSON.stringify({
			query: page,
			select: select,
		}),
		headers,
	});

	const data = await resp.json();
	return data;
}
