#!/usr/bin/env node

/*
 * The purpose of this script is to generate the language colors JSON file
 * imported by the frontend. GitHub's REST API does not return language colors
 * in its responses like the GraphQL API does.
 *
 * Thankfully GitHub provides colors in their linguist repository, but it has a
 * lot of extra information and it isn't in an easy to digest format. This
 * script downloads the latest version of that file and extracts the colors from
 * it. Languages are keyed by name, which matches the language name in the API
 * responses, and the value is the color hex code.
 */

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

await main();
