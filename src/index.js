import 'core-js/modules/es.array.iterator';

console.log('start');

setTimeout(() => {
  import(
    /* webpackChunkName: "sub" */
    /* webpackMode: "lazy" */
    './sub.js'
  ).then(({ Sub }) => {
    console.log('imported');
    const sub = new Sub();
    sub.method();
  });
}, 2000);
