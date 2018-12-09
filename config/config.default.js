'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544321429398_5732';

  // add your config here
  config.middleware = [
    'robot',
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
    addr: '/blog',
    title: '我的博客',
  };

  // robot
  config.robot = {
    ua: [
      /Baiduspider/i,
    ]
  }

  return config;
};
