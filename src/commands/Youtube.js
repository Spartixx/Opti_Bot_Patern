const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');

class YoutubeCommand extends Command {
    constructor() {
        super('youtube', {
           aliases: ['youtube'],
           description: {
            content: 'La commande youtube permet de regarder youtube en stream !',
            usages: `${PREFIX}youtube`,
            raccourcis: 'youtube'
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
        const { DiscordTogether } = require('discord-together');
        this.client.discordTogether = new DiscordTogether(this.client);


        if(message.member.voice.channel) {
            this.client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
            return message.channel.send(`${invite.code}`);
            });
        };
    }
}

module.exports = YoutubeCommand;