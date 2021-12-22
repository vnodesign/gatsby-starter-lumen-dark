'use strict';
const Shell = require('child_process');
exports.createPages = require('./gatsby/create-pages.js');
exports.onCreateNode = require('./gatsby/on-create-node.js');
exports.onPostBuild = function () {
    Shell.execSync('cp src/ads.txt public');
  };