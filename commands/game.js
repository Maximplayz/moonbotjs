const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    if(!message.author.id === '254225860649943051') 
   
    { 
        
        message.send('Bot Owner Only!') 
    
    } else {

    bot.user.setActivity(args.join(' '))
    message.send(`Bot's game has been Succesfully set to ${args.join(' ')}`)

}}

module.exports.help = {
    name: "game"
}