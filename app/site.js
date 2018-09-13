exports = module.exports = function() {
  var kerouac = require('kerouac');
  
  
  var site = kerouac();
  site.page('/CNAME', require('kerouac-cname')());
  return site;
};

exports['@implements'] = [
  'http://i.kerouacjs.org/Site',
  'http://i.kerouacjs.org/dns/cname/Site'
];
exports['@require'] = [];
