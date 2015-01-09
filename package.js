Package.describe({
  summary: "Define and use relationships between meteor collections",
  git: "https://github.com/emmerge/graviton"
});

Package.on_use(function (api, where) {

  if (api.versionsFrom) { // 0.9.0+ litmus test
    api.versionsFrom("0.9.1");
    api.use('mongo', ['client', 'server']);
  }

  api.use(['underscore', 'minimongo', 'peerlibrary:async'], ['client', 'server']);
  api.add_files(['lib/relations.js', 'lib/model.js', 'graviton.js'], ['client', 'server']);

  if (typeof api.export !== 'undefined') {
    api.export("Graviton", ["client", "server"]);
  }
});

Package.on_test(function (api) {
  api.use(['underscore', 'graviton', 'tinytest', 'test-helpers']);

  api.add_files([
    'test/test-helpers.js',
    'test/relation-test.js',
    'test/model-test.js',
    'test/legacy-test.js'
  ], 
  ['client', 'server']);
});


