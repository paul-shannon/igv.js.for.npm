# igv.js.npm
Drawing from the latest (15 oct 2017) build of igv.js, with very few modifications, this packaging
of the javascript genome browser can be used with npm, webpack, and
jupyter widgets 7.0.1.

## changes
  - require("datatables.net") is now require("datatables")
  - this then obtains (I think) the jQuery datatables plugin via
    normal npm and webpack usage.
  - all the image files (cursor_logo.png, cursor_log.svg, favicon.ico,
    igv-logo.svg) are in the img/ directory of this repo

## usage
   - add this to your package.json file in the dependencies section:   
````
   "igv\_js\_npm": "github:paul-shannon/igv.js.npm"
````
   - add this to your app's javascript file:
````
    var igv = require('igv.js.npm')
    require('igv.js.npm/igv.css')
`````


