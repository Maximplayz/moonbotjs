const Discord = require('discord.js');

function clean(text) {
    if (typeof(text) === 'string')
        return text.replace(/` /g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
    else
        return text;
}

module.exports.run = async (bot, message, args) => {

    if(message.author.id === '254225860649943051') {
        
        try {
            const code = args.join(" ");
            let evaled = eval(code);
      
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
      
            message.channel.send(clean(evaled), {code:"xl"});
          } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
          }

    } else {
            
            message.channel.send(':x: Bot Owner only.')
            
        }

}

module.exports.help = {
    name: "eval"
}