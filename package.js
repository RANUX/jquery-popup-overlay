Package.describe({
  name: 'brwn:jquery-popup-overlay',
  version: '1.6.0',
  // Brief, one-line summary of the package.
  summary: 'jquery-popup-overlay wrapper for Meteor.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/aamdani/jquery-popup-overlay',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.on_use(function (api) {
    api.versionsFrom('METEOR@1.1');
    // dependecies required by package
    //api.use('contributor:package-name@version.number.here','client')
    // adding the required file for package
    api.add_files('lib/jquery.popupoverlay.js', 'client');
});
