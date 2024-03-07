Extracted and improved from https://github.com/zaxbux/vue-matomo/blob/197647f/src/types/matomo.ts

Matomo JavaScript Tracking Client source code https://github.com/matomo-org/matomo/blob/5.x-dev/js/piwik.js

Matomo JavaScript Tracking Client docs https://developer.matomo.org/api-reference/tracking-javascript

Usage:

`npm i -D matomo-js-client-types`

```ts
/// <reference types="matomo-js-client-types" />
// Strictly typed now:
window._paq = window._paq || []
window._paq.push(['setSiteId', '3'])
window._paq.push([function () {
  console.log(this.hasRememberedConsent())
}])
```
