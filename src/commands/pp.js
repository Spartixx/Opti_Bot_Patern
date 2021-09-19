const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');


class PpCommand extends Command {
    constructor() {
        super('pp', {
           aliases: ['pp'],
           description: {
            content: 'La commande Pp permet de voir La photo de profil d\'un membre !',
            usages: `${PREFIX}pp | ${PREFIX}pp @membre`,
            raccourcis: 'pp'
        },
           category: 'Misc',
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
        return message.channel.send({ embeds: [ 
            this.client.functions.embed() 
                .setTitle(`***Voici la Pp de ${args.member.displayName} !***`)
                .setImage(`${args.member.user.displayAvatarURL()}`)
        ]})
    }
}

module.exports = PpCommand;