'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544321429398_5732';

  // add your config here
  config.middleware = [
    'robot', 
    // 'gzip',
  ];

  // view engine
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    }
  };

  // blog config
  config.blog = {
    name: 'dkplus',
    author: 'dk',
  };

  // robot
  config.robot = {
    ua: [
      /Baiduspider/i,
    ]
  };

  // gzip
  // config.gzip = {
  //   threshold: 1024,
  // };

  // cache
  config.cache = {
    default: 'memory',
    stories: {
      memory: {
        driver: 'memory',
        max: 100,
        ttl: 0,
      }
    }
  };

  config.security = {
    csrf: false,
  };

  return config;
};
