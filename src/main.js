import environment from './environment';

//Configure Bluebird Promises.
Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  aurelia.use
        .plugin('aurelia-google-maps', config => {
            config.options({
                apiKey: false, // use `false` to disable the key
                apiLibraries: 'drawing,geometry', //get optional libraries like drawing, geometry, ... - comma seperated list
                options: { panControl: true, panControlOptions: { position: 9 } } //add google.maps.MapOptions on construct (https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions)
            });
        })
  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
