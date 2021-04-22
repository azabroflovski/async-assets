![](https://azabroflovski.uz/logo-sm.png)

![Build](https://img.shields.io/badge/build-passing-brightgreen) ![Version](https://img.shields.io/badge/version-0.0.1-blue) ![License](https://img.shields.io/npm/l/async-assets?color=brightgreen) ![GitHub last commit](https://img.shields.io/github/last-commit/azabroflovski/async-assets)

A simple, lightweight JavaScript API for asynchronous including assets.

# Introduction
* [Installation](#installation)
  * [NPM](#npm)
  * [Use from CDN](#use-from-cdn)
  * [Download Assets](#download-assets)
* [How to use?](#how-to-use?)
* [License](#license)

⚡️ Asynchronous loading of styles and scripts without blocking rendering on the page. You can achieve significant growth with Google PageSpeed ​​Insights.

## Installation
There are few options on how to include/import package into your project:

### NPM
You can install package from NPM

```bash
$ npm install async-assets -D
```

Promise based API

```javascript
import AsyncAssets from 'async-assets'

try {
  const assets = await AsyncAssets('...')
  // do something
} catch (err) {
  console.log('Something wrong', err)
}
```

Callback API _(for backward compatibility)_

```javascript
import AsyncAssets from 'async-assets'

AsyncAssets('...', (err) => {
  if (err) throw 'Something wrong'

  console.log('success')
})
```

### Use from CDN

If you don't want to include package files in your project, you may use it from CDN. The following files are available:

```html
<script src="https://unpkg.com/async-assets/bundle.js"></script>
<script src="https://unpkg.com/async-assets/bundle.min.js"></script>
```

### Download assets
If you want to use package locally, you can directly download them from https://unpkg.com/async-assets/


## How to use?
Docs coming soon...


## License
MIT - Copyright (c) 2021-present

developed by [azabroflovski](https://github.com/azabroflovski "azabroflovski") 🍬
