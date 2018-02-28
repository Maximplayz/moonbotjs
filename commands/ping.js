const Discord = require('discord.js');
const mem = require('memory');

module.exports.run = async (bot, message, args) => {
    
    var mb = mem();
    
    message.channel.send(`My current ping is **${Math.round(bot.ping)}ms**\nMy current Memory Usage is: **${mb}mb**`)

    console.log(`The Ping Commands has been used by ${message.author.tag} (${message.author.id})`)
}

module.exports.help = {
    name: "ping"
}