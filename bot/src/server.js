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
    // TO-DO:
    // Use an EventEmitter pattern to have separate classes handle different messages
    // Maybe break apart the message if it is !check stuff
    // Fire the check event with data {message: message, from: from}
    // Probably trim off !check from the message first
    console.log(from + ' => #' + channel + ': ' + message);
});
