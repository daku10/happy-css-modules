#!/usr/bin/env node
// @ts-check

import { run, parseArgv } from '../dist/index.js';

run(parseArgv(process.argv)).catch((e) => {
  // eslint-disable-next-line no-console
  console.error(e);
  process.exit(1);
});
