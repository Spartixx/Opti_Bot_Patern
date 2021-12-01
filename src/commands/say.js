const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');


class SayCommand extends Command {
    constructor() {
        super('say', {
           aliases: ['say', 'dis'],
           description: {
            content: 'La commande say permet de parler avec le bot !',
            usages: `${PREFIX}say`,
            raccourcis: 'say, dis'
        },
           category: 'Dev',
           ignoreCooldown: '831835872625295390',
           ignorePermissions: '831835872625295390',
           userPermissions: 'ADMINISTRATOR',
           clientPermissions: 'ADMINISTRATOR',
           ratelimit: 2,
           cooldown: 3000,
           typing: true,
           ownerOnly: false,
           channel: 'guild',
           args: [
               {id: 'member', type: 'member', default: message => message.member},
           ]
        });
    }

    exec(message, args) {
        let words = message.content.split(' ')
        message.delete()
        if(words[1] === "false"){
            return message.channel.send(words[2])
        }
        
        return message.channel.send({ embeds: [ 
            this.client.functions.embed() 
                .setTitle(words[1])
        ]})
    }
}

module.exports = SayCommand;