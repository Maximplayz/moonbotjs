const Discord = require('discord.js');

function clean(text) {
    if (typeof(text) === 'string')
        return text.replace(/` /g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
    else
        return text;
}

module.exports.run = async (bot, message, args) => {

    let BotGuild = bot.guilds.find('id', '375634046840995840');
    let LogChan = BotGuild.channels.find('id', '412745394674466817');

    console.log(`${message.author.tag} (${message.author.id}) has used the say command. Content: "${message.content}"`)
    message.channel.send(args.join(' '))
    message.delete();

}

module.exports.help = {
    name: "say"
}