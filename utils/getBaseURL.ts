let baseURL: string;
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000';
} else {
  baseURL = 'https://mauritiusmedia.vercel.app';
}

export default baseURL;
