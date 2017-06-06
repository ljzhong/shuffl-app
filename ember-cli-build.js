/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let env = EmberApp.env();
  let isProductionLikeBuild = false;
  if (env === 'staging' || env === 'production') {
    isProductionLikeBuild = true;
  }

  // let projectEnvironmentConfig = defaults.project.config(env);
  let fingerprint = {
    // prepend: `${projectEnvironmentConfig['asset-cdn']}/`,
    enabled: isProductionLikeBuild,
  };

  const app = new EmberApp(defaults, {
    'ember-cli-babel': {
      includePolyfill: true
    },
    sourcemaps: {
      enabled: true,
      extensions: ['js'],
    },
    fingerprint,
    'ember-bootstrap': {
      bootstrapVersion: 4,
      'importBootstrapFont': false,
      'importBootstrapCSS': false
    },
    sassOptions: {
      includePaths: [
        'vendor/mdbootstrap/sass',
      ],
    },
  });

  app.import('vendor/mdbootstrap/js/mdb.min.js')
  app.import('vendor/mdbootstrap/js/tether.min.js')
  // TODO: replace with ember version
  app.import('vendor/mdbootstrap/js/typed.min.js')

  return app.toTree();
};
