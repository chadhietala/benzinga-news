var app, newsCtrl, io;

if (!module.parent) {
  console.log("Please don't call me directly. I am just the main app's minion.");
  process.exit(1);
}

newsCtrl = module.exports;

newsCtrl.index = function(req, res){
  var context = {
    site_title: 'yo'
  };
  res.render('home_index', context);
}