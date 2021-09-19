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
           userPermissions: 'SEND_MESSAGES',
           clientPermissions: 'SEND_MESSAGES',
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
        let words = message.content.slice(4)
        message.delete()
        return message.channel.send({ embeds: [ 
            this.client.functions.embed() 
                .setTitle(words)
        ]})
    }
}

module.exports = SayCommand;