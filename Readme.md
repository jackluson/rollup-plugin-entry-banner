# rollup-plugin-entry-banner

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

## Options

TODO
