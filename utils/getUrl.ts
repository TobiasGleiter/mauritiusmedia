export default function getUrl(path: string) {
  let baseURL: string;
  // CHECK IF DEVELOPMENT OR PROUDCTION TO SELECT RIGHT database
  process.env.NODE_ENV === 'development'
    ? (baseURL = process.env.NEXT_DEV_SITE_URL as string)
    : (baseURL = process.env.NEXT_PUBLIC_SITE_URL as string);

  return new URL(path, baseURL).toString();
}
