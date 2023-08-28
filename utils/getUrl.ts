let baseURL: string;

process.env.NODE_ENV === 'development'
  ? (baseURL = process.env.NEXT_DEV_SITE_URL as string)
  : (baseURL = process.env.NEXT_PUBLIC_SITE_URL as string);

export default baseURL;
