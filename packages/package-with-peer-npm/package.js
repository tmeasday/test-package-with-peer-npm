Package.describe({
  name: 'package-with-peer-npm',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-beta.12');
  api.use(['ecmascript', 'tmeasday:check-npm-versions']);
  api.mainModule('package-with-peer-npm.js');
});
