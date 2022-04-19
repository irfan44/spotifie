const getFullUrl = (url: string, params: any) => {
  const fullUrl = new URL(url);
  Object.keys(params).forEach((key) => {
    fullUrl.searchParams.append(key, params[key]);
  });
  return fullUrl.href;
};
export default getFullUrl;
