// Next
import { notFound } from "next/navigation";

// Utils
import { fetcher } from "./fetcher";



// Get Kirby files
export function getKirbyFiles(filePath: string) {
  return `${process.env.NEXT_PUBLIC_KIRBYCMS_URL}/${filePath}`;
}



// Get pages for add info -> causes hydration issues
export async function getPage(page: string, select = {}) {
  const resp = await fetcher(page, select);

  if (!resp.result || resp.result.length === 0) {
    return "No page data found for this query!";
  }

  return resp;
}



// Turn string into date
export function stringToDate(dateString: string) {
  const date = new Date(dateString);
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()];
  const dateToReturn = `${month.substr(0, 3)} '${date.getFullYear().toString().substr(2, 4)}`;
  return dateToReturn;
}