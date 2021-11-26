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