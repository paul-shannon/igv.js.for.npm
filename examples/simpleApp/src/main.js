var igv = require('igv.js')
require('igv.js/igv.css')
var $ = require("jquery")
//------------------------------------------------------------------------------------------------------------------------
$(document).ready(function() {

   console.log("document ready");

   var hg38_options = {
       minimumBases: 5,
       flanking: 1000,
       showRuler: true,

       reference: {
           id: "hg38",
           fastaURL: "https://s3.amazonaws.com/igv.broadinstitute.org/genomes/seq/hg38/hg38.fa",
           cytobandURL: "https://s3.amazonaws.com/igv.broadinstitute.org/annotations/hg38/cytoBandIdeo.txt"
            },
        tracks: [
           {name: 'Gencode v24',
            url: "https://s3.amazonaws.com/igv.broadinstitute.org/annotations/hg38/genes/gencode.v24.annotation.sorted.gtf.gz",
            indexURL: "https://s3.amazonaws.com/igv.broadinstitute.org/annotations/hg38/genes/gencode.v24.annotation.sorted.gtf.gz.tbi",
            format: 'gtf',
            visibilityWindow: 2000000,
            displayMode: 'EXPANDED'
            },
            ]
        }; // hg38_options

     var igvOptions = hg38_options;
     window.igvBrowser = igv.createBrowser($("#igvDiv"), hg38_options);

}) // document.ready
//------------------------------------------------------------------------------------------------------------------------
