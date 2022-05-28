import * as fs from 'node:fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';
import nock from 'nock';
import app from '../index.js';
import { generateFileName } from '../src/utils.js';

let tempDir;
const testUrl = 'https://ru.hexlet.io/courses';
const fileName = generateFileName(testUrl);
const stubData = 'HEYYAA';

beforeEach(async () => {
  tempDir = await fs.mkdtemp(join(tmpdir(), 'page-loader-'));
});

test('Missing url as param', async () => {
  expect(() => app()).toThrow('Missing Url, ending process.');
});

test('Does file successfully saving', async () => {
  const scope = nock(testUrl)
    .get('')
    .reply(200, stubData);

  await app(testUrl, { output: tempDir });

  const data = await fs.readFile(join(tempDir, fileName), 'utf-8');

  scope.done();

  expect(data).toBe(stubData);
});
