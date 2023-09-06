// Utils
import { fetcher } from "./fetcher";

// Get Kirby files
export function getKirbyFiles(filePath: string) {
  return `${process.env.NEXT_PUBLIC_KIRBYCMS_URL}/${filePath}`;
}

// Get pages for add info
export async function getPage(page: string, select = {}) {
  const resp = await fetcher(page, select);

  if (!resp.result || resp.result.length === 0) {
    return "No page data found for this query!";
  }

  return resp;
}