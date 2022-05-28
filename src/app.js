import axios from 'axios';
import { writeFile } from 'fs/promises';
import { generateFileName } from './utils.js';

const defaultPath = process.cwd();

const app = (url, output) => {
  if (!url) {
    console.log('Missing Url, ending process.');
    return;
  }

  const outputDir = output?.output ?? defaultPath;

  const response = axios
    .get(url)
    .then((res) => {
      const fileName = generateFileName(url);
      const fullPath = [outputDir, fileName].join('/');

      return writeFile(fullPath, res.data, 'utf8')
        .then(() => console.log(`File was saved to ${fullPath}`))
        .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));

  return Promise.all([response])
};

export default app;
