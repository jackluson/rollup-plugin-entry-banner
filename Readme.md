# rollup-plugin-entry-banner


[![npm version](https://badge.fury.io/js/rollup-plugin-entry-banner.svg)](https://www.npmjs.com/package/rollup-plugin-entry-banner)
![NPM Downloads](https://badgen.net/npm/dt/rollup-plugin-entry-banner)
[![Build Status](https://travis-ci.com/jackluson/rollup-plugin-entry-banner.svg?branch=main)](https://travis-ci.com/jackluson/rollup-plugin-entry-banner)
[![codecov](https://codecov.io/gh/jackluson/rollup-plugin-entry-banner/branch/main/graph/badge.svg)](https://codecov.io/gh/jackluson/rollup-plugin-entry-banner)
[![MIT](https://img.shields.io/github/license/jackluson/rollup-plugin-entry-banner?style=plastic)](https://github.com/jackluson/rollup-plugin-entry-banner/blob/main/LICENSE)
## Introduction
A simple Rollup plugin to prepend content to entry chunk

As follows:

![screenshots](screenshots/entry_log.png)
## Usage

Install the plugin
> npm install --save-dev rollup-plugin-banner


Add it to your rollup configuration:

```js
import entryBanner from 'rollup-plugin-entry-banner';
// const { bannerEntry } = require('rollup-plugin-entry-banner'); /* use commonjs */
export default {
  plugins: [
    entryBanner()
  ]
}
```
Note: it can also be used in  [Vite](https://github.com/vitejs/vite).
## Options


| name             |        type        | required | default                                             |                       description |
| :--------------- | :----------------: | :------: | :-------------------------------------------------- | ----------------------------------------------: |
| packageJsonDir   |      string     |  false   | `process.cwd()` |                    the directory path of The `package.json` file |
| preset    |       boolean       |  false   | true                                                  |         whether apply the preset of the banner style (It includes the log style shown in the above picture. ) |
| renderBanner    |       function       |  false   | undefined                                                  |        customize the output banner content |


## Other

- [console_output_with_css](https://developer.chrome.com/docs/devtools/console/api/#styling_console_output_with_css)
