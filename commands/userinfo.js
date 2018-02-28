const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    if(!message.mentions.members.first()) return message.channel.send(':x: Please Mention a User.');
    
    let InfoUser = message.mentions.members.first();
    let UID = InfoUser.user.id;
    let UTAG = InfoUser.user.tag;
    let UGAME = InfoUser.user.presence.game;
    let USTAT = InfoUser.user.presence.status;
    let LASTMSG = InfoUser.user.lastMessage;
    let LASTMSGID = InfoUser.user.lastMessageID;
    let UBOT = InfoUser.user.bot;
    let KICKABLE = InfoUser.kickable;
    let BANNABLE = InfoUser.bannable;
    let HASADMIN = InfoUser.hasPermission('ADMINISTRATOR');
    let UHROLE = InfoUser.highestRole.name;
    let UHROLEID = InfoUser.highestRole.id;

    var userinfoEmbed = new Discord.RichEmbed()
    .setTitle('Userinfo')
    .setDescription(`\n__User:__ **${UTAG}** (**${UID}**)\n__Game:__ **${UGAME}**\n__Status:__ **${USTAT}**\n\n__Last Message:__ "${LASTMSG}" (**${LASTMSGID}**)\n\n__Highest Role:__ "${UHROLE}" (**${UHROLEID}**)\n\n__Is Administrator?:__ **${HASADMIN}**\n__Is Bot?:__ **${UBOT}**\n__Bannable by me?:__ **${BANNABLE}**\n__Kickable by me?:__ **${KICKABLE}**`)
    .setColor('ff0000')
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL)
    message.channel.send(userinfoEmbed);

    console.log(`The userinfo command has been used by ${message.author.tag} (${message.author.id})`)
    

}

module.exports.help = {
    name: "userinfo"
}