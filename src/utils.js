const regex = /[^a-zA-Z\d]/gm

export const generateFileName = (url) => {
  const newUrl = new URL(url);

  const protocol = newUrl.protocol;
  const [_, rest] = url.split(`${protocol}//`);
  const fileName = rest.replaceAll(regex, '-');
  return [fileName, '.html'].join('');
}
