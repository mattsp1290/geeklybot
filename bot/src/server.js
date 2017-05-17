var irc = require('irc');
fs = require('fs');

var pass = fs.readFileSync(process.env.PASS_PATH).toString().trim();

var channel = process.env.CHANNEL;

var bot = new irc.Client('irc.chat.twitch.tv',process.env.USERNAME, {
    channels: ['#' + channel],
    port: 6667,
    password: pass,
    debug: true,
    showErrors: true,
    autoRejoin: true,
    autoConnect: true,
});
bot.addListener('error', function(message) {
    console.log('error: ', message);
});

bot.addListener('message#' + channel, function (from, message) {
    console.log(from + ' => #' + channel + ': ' + message);
});
