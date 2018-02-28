const Discord = require('discord.js');
var prefix = 'moon.';

function hook(channel, title, message, color, avatar) {
    
    if (!channel) return console.log('Channel not specified.');
    if (!title) return console.log('Title not Specified.');
    if (!message) return console.log('Message not specified.');
    if (!color) color = 'd9a744';
    if (!avatar) avatar = 'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png'

    color = color.replace(/\s/g, '');
    avatar = avatar.replace(/\s/g, '');

    channel.fetchWebhooks()
        .then(webhook => {

            let foundHook = webhook.find('name', 'Webhook');

            if (!foundHook) {
                channel.createWebhook('Webhook', 'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png')
                    .then(webhook => {

                        webhook.send('', {
                            "username": title.slice(prefix.length + 4),
                            "avatarURL": avatar,
                            "embeds": [{
                                "color": parseInt(`0x${color}`),
                                "description": message
                            }]
                        })
                            .catch(error => {
                                console.log(error);
                                return channel.send('**Something went wrong while sending the webhook, please check console.**');
                            })
                    })
            }   else {
                foundHook.send('', {
                    "username": title.slice(prefix.length + 4),
                    "avatarURL": avatar,
                    "embeds": [{
                        "color": parseInt(`0x${color}`),
                        "description": message
                    }]
                })
                    .catch(error => {
                        console.log(error);
                        return channel.send('**Something went wrong while sending the webhook, please check console.**');
                    })    
            }

        })

}

module.exports.run = async (bot, message, args) => {

    message.delete();

    if(args[0] === '') {
        return hook(message.channel, 'Hook Usage', `moon.hook <title> <message> [HEXcolor] [avatarURL]\n\n**<> is required\n [] is optional**`, 'FC8469', 'https://cdn4.iconfinder.com/data/icons/global-logistics-3/512/129-612.png')
    }

    let hookArgs = message.content.slice(prefix.lenght + 4).split(",");

    hook (message.channel, hookArgs[0], hookArgs[1], hookArgs[2], hookArgs[3]);

}

module.exports.help = {
    name: "hook"
}