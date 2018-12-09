'use strict';

const moment = require('moment');
exports.formatTime = time => moment(time).format('MMMM Do YYYY, h:mm:ss');

exports.formatSize = size => `${Math.floor(size/10)/100}MB`