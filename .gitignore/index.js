const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = (".")

bot.on('ready', function() {
    bot.user.setGame("command !help");
    console.log("ok mek");
});

bot.login("tu la pas b.....")
