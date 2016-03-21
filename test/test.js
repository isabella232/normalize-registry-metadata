
var test = require('tape')
var normalize = require('../')
var badVersions = require('./fixtures/skim-shelljs.json')
var deletedJson = require('./fixtures/skim-deleted.json')


test("can fix versions",function(t){
  var cleaned = normalize(badVersions)

  t.ok(cleaned,'should have cleaned')

  t.ok(!badVersions.versions['0.0.5pre1'],'should have malformed version')
  t.ok(!cleaned.versions['0.0.5pre1'],'should have removed malformed version')
  t.ok(cleaned.versions['0.0.5-pre1'],'should have cleaned version')
  t.ok(cleaned.time['0.0.5-pre1'],'should have fixed time object also')


  // this doesnt have dist-tags!
  // need to check dist-tags

  t.end()

})


test("deleted docs return undefined",function(t){
  t.equals(normalize(deletedJson),undefined,"deleted json should be undefined")
  t.end()
})

test("design docs return undefined",function(t){
  t.equals(normalize({_id:"_design/foo"}),undefined,'design doc return undefined')
  t.end()
})

test("objects without _id return undefined",function(t){
  delete badVersions._id
  t.equals(normalize(badVersions),undefined,'is missing _id should return undefined')
  t.end()
})

test("undefined goes in undefined comes out",function(t){
  t.equals(normalize(),undefined,'should be undefined')
  t.end()
})

