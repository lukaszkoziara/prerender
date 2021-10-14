#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({
    chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars'],
    workers: 4,
//    logRequests: true,
    pageLoadTimeout: 40 * 1000
});

server.use(prerender.sendPrerenderHeader());
server.use(prerender.browserForceRestart());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());
server.use(prerender.basicAuth());
server.use(prerender.whitelist());
server.use(require('prerender-disk-cache'));

server.start();
