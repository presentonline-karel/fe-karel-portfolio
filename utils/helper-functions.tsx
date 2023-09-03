export default function getKirbyFiles(filePath: string) {
  return `${process.env.NEXT_PUBLIC_KIRBYCMS_URL}/${filePath}`;
}