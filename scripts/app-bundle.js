define('app',['exports', './services/marker-service'], function (exports, _markerService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    var _this = this;

    _classCallCheck(this, App);

    var meshbluConfig = {
      uuid: '5cf4dca1-8698-44fb-808a-f1a3166500f6',
      token: '8fb976697500d03537a4eec3c6fee1c9ab27a4a6'
    };
    this.gpsMarkers = [];
    this.conn = meshblu.createConnection(meshbluConfig);
    this.conn.on('config', function (data) {
      _this.gpsMarkers = data.asan.markers;
    });
    this.message = 'ASAN Telemetry';
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    aurelia.use.plugin('aurelia-google-maps', function (config) {
      config.options({
        apiKey: false,
        apiLibraries: 'drawing,geometry',
        options: { panControl: true, panControlOptions: { position: 9 } } });
    });
    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('services/marker-service',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var MarkerService = exports.MarkerService = function MarkerService(meshbluConfig) {
    _classCallCheck(this, MarkerService);
  };
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><h1>${message}</h1><google-map markers.bind=\"gpsMarkers\" auto-update-bounds=\"true\"></google-map></template>"; });
//# sourceMappingURL=app-bundle.js.map