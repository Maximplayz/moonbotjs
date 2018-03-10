const Discord = require('discord.js');
const ms = require('ms');
const bot = new Discord.Client();
const fs = require('fs');
bot.commands = new Discord.Collection();
var prefix = 'moon.';
const weather = require('weather-js');
const memory = require('memory');

fs.readdir("./commands", (err, file) => {

    if(err) console.log(err);

    let jsfile = file.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log('Could not find any Commands!');
        return;
    }

 jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
 });

});

bot.on('ready', () => {
    bot.user.setGame('Type: moon.help')
   
    var mb = memory();

    console.log(' ')
    console.log(`${bot.user.tag} is ready on ${bot.guilds.size} servers.`)
    console.log(' ')
    console.log(`Current Memory usage ${mb}mb`)
    console.log(' ')

});

bot.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let messageArray = message.content.split(' ');
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
    
});

bot.on('messageDelete', message => {

    let moonlogs = message.guild.channels.find('name', 'moonlogs')

    if (!moonlogs) {
        
        message.guild.createChannel('moonlogs','text')
         const embed = new Discord.RichEmbed()
        .setColor('ff0000')
        .setTitle('Message Deleted')
        .addField('Message Author', message.author.tag, true)
        .addField('Message ID', message.id, true)
        .addField('Message Channel', `#${message.channel.name} **(${message.channel.id})**`)
        .setDescription(`**Message Content:**\n"${message.content}"`)
        moonlogs.send(embed)
        

    } else {

        const embed = new Discord.RichEmbed()
        .setColor('ff0000')
        .setTitle('Message Deleted')
        .addField('Message Author', message.author.tag, true)
        .addField('Message ID', message.id, true)
        .addField('Message Channel', `#${message.channel.name} **(${message.channel.id})**`)
        .setDescription(`**Message Content:**\n"${message.content}"`)
        moonlogs.send(embed)

    }

});

bot.on('guildMemberAdd', member =>{

    let moonlogs = message.guild.channels.find('name', 'moonlogs')

    if (!moonlogs) {
        
        const embed = new Discord.RichEmbed()
        .setColor('00ff00')
        .setTitle('Member Joined Guild')
        .addField('Member Tag', `${member.tag}`, true)
        .addField('Member ID', `${member.id}`, true)
        .addField('Date', `${member.joinedAt}`)
        moonlogs.send(embed)
        

    } else {

        const embed = new Discord.RichEmbed()
        .setColor('00ff00')
        .setTitle('Member Joined Guild')
        .addField('Member Tag', `${member.tag}`, true)
        .addField('Member ID', `${member.id}`, true)
        .addField('Date', `${member.joinedAt}`)
        moonlogs.send(embed)

    }

});

bot.on('guildMemberRemove', member =>{

    let moonlogs = message.guild.channels.find('name', 'moonlogs')

    if (!moonlogs) {
        
        const embed = new Discord.RichEmbed()
        .setColor('ff0000')
        .setTitle('Member Left Guild')
        .addField('Member Tag', `${member.tag}`, true)
        .addField('Member ID', `${member.id}`, true)
        .addField('Date', `${member.joinedAt}`)
        moonlogs.send(embed)
        

    } else {

        const embed = new Discord.RichEmbed()
        .setColor('ff0000')
        .setTitle('Member Left Guild')
        .addField('Member Tag', `${member.tag}`, true)
        .addField('Member ID', `${member.id}`, true)
        .addField('Date', `${member.joinedAt}`)
        moonlogs.send(embed)

    } 

});

bot.login(process.env.BOT_TOKEN);