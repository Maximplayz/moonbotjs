const Discord = require('discord.js');
const shorten = require('isgd');

module.exports.run = async (bot, message, args) => {
    
    if(!args[0]) return message.channel.send('**:x: Incorrect usage.** ``moon.shorten <URL> [title]``')

    if(!args[1]) {

        shorten.shorten(args[0], function(res) {
            if (res.startsWith('Error:')) return message.channel.send('**Please enter a valid URL!**')
            message.channel.send(`**Your Shortened Link: <${res}>**`)
        })

    } else {

        shorten.custom(args[0], args[1], function(res) {
            if (res.startsWith('Error:')) return message.channel.send(`**${res}**`);
            message.channel.send(`**Your Shortened Link: <${res}>**`)
        })

    }

}

module.exports.help = {
    name: "shorten"
}