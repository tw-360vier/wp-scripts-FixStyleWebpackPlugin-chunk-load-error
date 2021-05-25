import(
  /* webpackChunkName: "my-chunk" */
  './module.js'
).then(() => {
  console.log('index.js: module loaded')
})
console.log('index.js')
