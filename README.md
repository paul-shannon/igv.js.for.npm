# igv.js.npm

## pull, then build a fresh version of igv.js from the igvteam's repo

 - git clone https://github.com/igvteam/igv.js.git (or ````git pull origin``` if you had previously cloned the repo)
 - cd igv.js
 - grunt
 - cd ../igv.js.npm
 - cp ../igv.js/dist/igv.js .
 - cp ../igv.js/css/igv.css igv.css 
 - cp ../igv.js/css/img/* img/
 - bump version number in package.json
 - commit these changes 

## How to use this this npm version of igv.js in your (separate) webapp

   - add this to your package.json file in the dependencies section:   
````
   "igv_js_npm": "github:paul-shannon/igv.js.npm"
````
   - add this to your app's javascript file:
````
    var igv = require('igv.js.npm')
    require('igv.js.npm/igv.css')
`````
   - webpack needsa css and an svg loader:
````
var rules = [
    { test: /\.css$/, use: ['style-loader', 'css-loader']},
    { test: /\.svg$/, use: ['svg-loader']}
]
````

