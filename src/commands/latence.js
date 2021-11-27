const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');

class LatenceCommand extends Command {
    constructor() {
        super('latence', {
           aliases: ['latence','ping', 'ms', 'l'],
           description: {
            content: 'La commande Latence permet de savoir quelle est la latence du bot et de l\'API !',
            usages: `${PREFIX}latence`,
            raccourcis: 'latence, ping, ms, l'
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
        const sent_message = await message.channel.send('Ping :');
        const timeStamp = message.editedTimestamp ? message.editedTimestamp : message.createdTimestamp;
        const bot_latency = `${'```'}\n ${Math.round(sent_message.createdTimestamp - timeStamp)}ms ${'```'}`;
        const API = `${'```'}\n ${Math.round(message.client.ws.ping)}ms ${'```'}`;

        const embed = this.client.functions.embed()
            .setTitle('📊 Latence 📊')
            .addField('🤖 Latence du bot 🤖', bot_latency, true)
            .addField('💻 Latence de l\'API 💻', API, true)

        await sent_message.edit({
            content: null,
            embeds: [embed]
        })
    }
}

module.exports = LatenceCommand;