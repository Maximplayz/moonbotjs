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

bot.login('MzcyNTEyNjc5ODIwMTMyMzUy.DWC0aw.9U9X5A8T1dduKH-RCd2rx9ul9WE');