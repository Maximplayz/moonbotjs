const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    if(!message.author.id === "254225860649943051") return message.channel.send(':x: Bot Owner Only.');

    let NEWNAME = args.join(' ');
    let OLDNAME = bot.user.tag;

    bot.user.setUsername(NEWNAME)
    message.channel.send(`:white_check_mark: Succesfully changed my Global Username from ${OLDNAME} to ${NEWNAME}!`)

}

module.exports.help = {
    name: "username"
}