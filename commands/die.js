const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    if(!message.author.id === '254225860649943051') return message.channel.send(':x: Bot Owner Only.');

    message.channel.send(':white_check_mark: Terminating Connection to Discord.')
    bot.destroy();

}

module.exports.help = {
    name: "die"
}