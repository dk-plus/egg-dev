'use strict';

// had enabled by egg
// exports.static = true;

exports.nunjucks = {
  enabled: true,
  package: 'egg-view-nunjucks',
};

exports.cache = {
  enabled: true,
  package: 'egg-cache',
};