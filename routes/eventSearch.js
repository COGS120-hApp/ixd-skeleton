
/*
 * GET home page.
 */
var data = require('../data.json');
exports.view = function(req, res){
  var payload = {};
  var id = req.params.id;
  payload.event = data.events[id % data.events.length];
  payload.viewAlt = false;
  res.render('eventSearch', payload);
};
exports.viewAlt = function(req, res){
    // var events = data.events;
    // console.log(events);
    data["viewAlt"] = true;
    res.render('eventSearch', data);
}