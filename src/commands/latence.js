const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');

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
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')
        const sent_message = await message.channel.send('Ping :');
        const timeStamp = message.editedTimestamp ? message.editedTimestamp : message.createdTimestamp;
        const bot_latency = `${'```'}\n ${Math.round(sent_message.createdTimestamp - timeStamp)}ms ${'```'}`;
        const API = `${'```'}\n ${Math.round(message.client.ws.ping)}ms ${'```'}`;

        const embed = this.client.functions.embed()
            .setTitle('ð Latence ð')
            .addField('ð¤ Latence du bot ð¤', bot_latency, true)
            .addField('ð» Latence de l\'API ð»', API, true)

        await sent_message.edit({
            content: null,
            embeds: [embed]
        })
        CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  Commande exÃ©cutÃ© : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`)
    }
}

module.exports = LatenceCommand;