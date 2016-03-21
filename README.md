# normalize-registry-metadata
clean some common fields in package metadata objects you get from registry changes feeds


```
var clean = require('normalize-registry-metadata')
var request = require('request')
request.get('https://skimdb.npmjs.com/registry/shelljs',function(err,res,body){

  
  var cleaned = clean(JSON.parse(body))

  // all clean. this will now work with the cli and is nearly identical to the result from registry.npmjs.org
  // nearly identical because it cleans the keys in the time object and a couple other things with dist-tags
})

```
