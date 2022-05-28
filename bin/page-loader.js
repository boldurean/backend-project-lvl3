#!/usr/bin/env node
import { program } from 'commander';
import app from '../index.js';

const defaultPath = process.cwd();

program
  .version('1.0.0')
  .description('Page loader utility')
  .helpOption('-h, --help', 'display help for command')
  .option('-o, --output [dir]', 'output dir', defaultPath)
  .arguments('<url>')
  .action((url, output) => app(url, output))
  .parse(process.argv);
