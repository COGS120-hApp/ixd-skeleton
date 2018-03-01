var key = require("../key.json");

exports.view = function(req, res){
  
  res.render('navigation', key);
};
