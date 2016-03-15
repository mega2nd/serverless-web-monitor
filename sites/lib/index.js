/**
 * Lib
 */

module.exports.respond = function(event, cb) {
  var response = {
    message: "Your Serverless function ran successfully!"
  };

  return cb(null, response);
};

var path = require('path'),
  fs = require('fs'),
  ejs = require('ejs');

module.exports.renderTemplate = function(template, params){
  var filePath = path.join(__dirname, '../', template);
  var html = fs.readFileSync(filePath, 'UTF-8');
  return ejs.render(html, params)
};

module.exports.formParams = function(paramStr) {
  formParams = {};
  params = paramStr.split("&");
  params.forEach(function (data) {
    pair = data.split("=");
    formParams[pair[0]] = pair[1];
  });
  return formParams;
};