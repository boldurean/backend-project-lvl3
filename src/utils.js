const regex = /[^a-zA-Z\d]/gm;

// eslint-disable-next-line import/prefer-default-export
export const generateFileName = (url) => {
  const newUrl = new URL(url);

  const { protocol } = newUrl;
  const [, rest] = url.split(`${protocol}//`);
  const fileName = rest.replaceAll(regex, '-');
  return [fileName, '.html'].join('');
};
