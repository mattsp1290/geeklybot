var irc = require('irc');
fs = require('fs');

var pass = fs.readFileSync(process.env.PASS_PATH).toString().trim();

var channel = process.env.CHANNEL;

var bitTypes = ['cheer', 'swiftrage', 'kappa', 'kreygasm'];

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
    bitTypes.forEach(function(bitType) {
      if (message.indexOf(bitType) != -1) {
        // Example here we should emit a bit event.
        console.log('Message: You got a bit of type ' + bitType);
      }
    });
    console.log(from + ' => #' + channel + ': ' + message);
});

bot.addListener('raw', function (data) {
    // These are using for testing against raw.
    // console.log('raw: ' + data.command + " : " + data.args);
    // console.log('prefix: ' + data.prefix + ' rawCommand: ' + data.rawCommand + ' commandType: ' + data.commandType);
    // console.log(Object.keys(data));
});
