// Imported util functions
import { fetcher } from "./fetcher";

export async function getPageByUuid(internalPage: String) {

  console.log("internalPage", internalPage);

	const page = await fetcher(`page("${internalPage}")`, {
		"url": true,
		"slug": true,
	});

  console.log("page", page);

  return page.result.slug;
}
