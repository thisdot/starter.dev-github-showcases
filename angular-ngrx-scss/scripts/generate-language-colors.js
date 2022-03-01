#!/usr/bin/env node

import fetch from 'node-fetch';
import fs from 'fs/promises';
import yaml from 'yaml';

const LANGUAGES_FILE_URL =
  'https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml';

const main = async () => {
  const res = await fetch(LANGUAGES_FILE_URL);
  const languages = yaml.parse(await res.text());

  const colors = Object.keys(languages).reduce((prev, cur) => {
    const color = languages[cur].color;
    if (color) {
      prev[cur] = color;
    }
    return prev;
  }, {});

  const out = new URL('../src/assets/language-colors.json', import.meta.url);
  await fs.writeFile(out, JSON.stringify(colors));
};

(async () => {
  await main();
})();
