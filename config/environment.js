/* eslint-env node */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'shuffl-app',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    'ember-full-story': {
      debug: false, // default
      enabledEnvironments: ['production', 'staging'], // default
      org: '50CKG' // required, no default
    },
    googleFonts: [
      'Roboto:200,300,400,500,700'
    ],
    metricAdapters: [{
      name: 'GoogleAnalytics',
      environments: ['staging', 'production'],
      config: {
        id: 'UA-100428483-1',
        // Use `analytics_debug.js` in development
        debug: environment === 'development',
        // Use verbose tracing of GA events
        trace: environment === 'development',
        // Ensure development env hits aren't sent to GA
        sendHitTask: environment !== 'development'
      }
    }],
    'g-map': {
      // exclude: true,
      key: 'AIzaSyAeCT0ZWtmcXH4aLJZn1pYHHdhYD-woltE',
      // client: 'gme-your-unique-google-client-id',
    },
    shuffl: {
      api: {
        host: 'http://localhost:3000',
        namespace: '',
      },
    },
    'ember-cli-mirage': {
      enabled: false,
    },
    'open-table': {
      host: 'https://opentable.herokuapp.com',
      namespace: 'api'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'mirage') {
    ENV.shuffl.api.host = 'http://localhost:4200';

    ENV['ember-cli-mirage'].enabled = true;
  }

  if (environment === 'staging-local') {
    ENV.shuffl.api.host = 'https://xstaging-api.shuffllunch.com';
  }

  if (environment === 'staging') {
    ENV.shuffl.api.host = 'https://xstaging-api.shuffllunch.com';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
