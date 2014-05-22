var fs = require('fs');

module.exports = function(app) {
  app.get('/*.json', function(req, res) {
    var filename = req.url.replace(/^\/|\/$/g, '');
    var filepath = 'server/api-stubs/' + filename;
    res.contentType('application/json');
    fs.readFile(filepath, 'utf-8', function(err, data) {
      if(err) {
        return console.log(err);
      }
      res.end(data);
    });
  });
};