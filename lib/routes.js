var app, newsCtrl;

if (!module.parent) {
  console.log("Please don't call me directly. I am just the main app's minion.");
  process.exit(1);
}

app = module.parent.exports.app;

newsCtrl = require('./controllers/news_controller');

app.get('/', newsCtrl.index);

