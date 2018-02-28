const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    var HELPEMBED = new Discord.RichEmbed()
    .setTitle('``All Bot Commands``')
    .setColor('ff0000')
    .addField('moon.ping', '**Gets the bots ping**')
    .addField('moon.userinfo', '**Gets info about the Mentioned user**\n**Usage:** ``moon.userinfo <mention>``')
    .addField('moon.die', '**Terminates Connection to Discord ``(Bot Owner Only)``**')
    .addField('moon.username', '**Changes the bots usename ``(Bot Owner Only)``**\n**Usage:** ``moon.username <newName>``')
    .addField('moon.say', '**Lets the bot Repeat what you input**\n**Usage:** ``moon.say <message>``')
    .addField('moon.shorten', '**Shortens a link\nUsage: ** ``moon.shorten <URL> [Title] <- The title is optional``')
    .addField('moon.hook', '**Sends a COOL webhook ``(Bot Owner only)``**\n**Usage: **``moon.hook <title> <message> [HEXcolor] [avatarURL]``\n<> is required\n [] is optional')
    .addField('moon.weather', '**Checks the Weather for the Specified City\nUsage: ** ```moon.weather <city>``')
    .addField('moon.eval', '**Evaluate Javascript code ``(Bot Owner Only)``\nUsage: ``moon.eval <code>``')
    .setFooter('Moonbot coded by LSD#3367', bot.user.displayAvatarURL)
    message.channel.send(HELPEMBED)
    
}

module.exports.help = {
    name: "help"
}