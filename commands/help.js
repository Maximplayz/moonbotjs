const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    	if (args[0] === 'general') {
            message.channel.send('__**General Commands**__\n\n``moon.userinfo <mention>`` => **Shows info about the Mentioned user.**\n``moon.weather <city>`` => **Shows weather for a specific City**\n``moon.shorten <url> [title]`` => **Shortens a URL with optional title**\n``moon.ping`` => **Shows the bots ping + memory usage**')
        }

        if (args[0] === 'botowner') {
            message.channel.send('__**Bot Owner Only Commands**__\n\n``moon.die`` => **Terminates connection to discord**\n``moon.hook <title> <message> [color] [avatar]`` => **Creates a Webhook**\n```moon.eval <code>`` => **Evaluates Javascript Code**\n``moon.username <new_name>`` => **Changes the Bots Global Username**')
        }

        if (args[0] === '') {
        message.channel.send('__**Aviable Categories**__\n\n``general (moon.help general)`` => **General Command Help**\n``botowner (moon.help botowner)`` => **Bot Owner Command Help**')
        }
        
}

module.exports.help = {
    name: "help"
}