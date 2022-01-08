'use strict';
const Shell = require('child_process');
exports.createPages = require('./gatsby/create-pages.js');
exports.onCreateNode = require('./gatsby/on-create-node.js');
exports.onPostBuild = () => {
    Shell.execSync('cp ads.txt public/');
    Shell.execSync('cp -r backend public/');
  };