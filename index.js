var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId:'1582996232',
  channelSecret:'aea9c4bea0639a96ceb76d62302a285b',
  channelAccessToken:'elm+hhQtgPLiL+48zVsMJ1Y9Loz9TW4IbnUMsTOGDrGsA3R5mAd77eOEnsLgfDnQ8Klz2Ka2fRVanEA0AwrdklZYjecIue19KuBZoxYFh43cwJ5ZYAIBrETmpiUkPsPXrhsbaby9oYiLEpa3pQb++QdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});

bot.on('message', function(event) {
  if (event.message.type = 'text') {
    var msg = event.message.text;
    event.reply(msg).then(function(data) {
      // success 
      console.log(msg);
    }).catch(function(error) {
      // error 
      console.log('error');
    });
  }
  else if (event.message.type = 'sticker') {
    event.reply('人家看不懂貼圖啦（´◔​∀◔`)').then(function(data) {
      // success 
      console.log('suc');
    }).catch(function(error) {
      // error 
      console.log('error');
    });
  }
});