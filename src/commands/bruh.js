const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');

class BruhCommand extends Command {
    constructor() {
        super('bruh', {
           aliases: ['bruh','b'],
           description: {
            content: 'La commande bruh permet de faire une action que je cherche encore à déterminer',
            usages: `${PREFIX}bruh`,
            raccourcis: 'bruh'
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
        });
    }

    async exec(message) {
        return message.channel.send({ embeds: [
            this.client.functions.embed()
                .setTitle('***__Bruh__***')
        ]})
    }
}

module.exports = BruhCommand;