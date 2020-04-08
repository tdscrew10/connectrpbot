const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = (".")

bot.on('ready', function() {
    bot.user.setGame("command !help");
    console.log("ok mek");
});

bot.login("Njg5ODkyMTYyMTIwMzE4OTg2.Xo2BpQ.NYDMAFwR9JWBtgrgQb_l7RSV58E")
