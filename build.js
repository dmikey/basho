#!/usr/local/bin/node
var fs = require('fs');
var requirejs = require('requirejs');
var lib_name = 'basho';

var config = {
    baseUrl: 'src',
    name: lib_name,
    out: 'dist/'+ lib_name + '-min.js'
};

requirejs.optimize(config, function (buildResponse) {

    var appends = [
        'define(["',
            lib_name,
        '"], function (',
            lib_name,
        ') { return ',
            lib_name,
        '; });'
    ];

    fs.appendFile(config.out, appends.join(''), function (err) {
      if (err) throw err;
      console.log(lib_name + ' has been built!');
    });
}, function(err) {
      console.log(err);
});