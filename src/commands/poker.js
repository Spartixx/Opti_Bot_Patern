const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');

class PokerCommand extends Command {
    constructor() {
        super('poker', {
           aliases: ['poker'],
           description: {
            content: 'La commande poker permet de jouer au poker !',
            usages: `${PREFIX}poker`,
            raccourcis: 'poker'
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
        const { DiscordTogether } = require('discord-together');
        this.client.discordTogether = new DiscordTogether(this.client);

        CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().format('LTS')} : ${message.member.user.tag} a exécuté la commande ${message.content} ${'```'}`)

        if(message.member.voice.channel) {
            this.client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
            return message.channel.send(`${invite.code}`);
            });
        };
    }
}

module.exports = PokerCommand;