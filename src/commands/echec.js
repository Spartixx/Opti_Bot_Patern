const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');

class EchecCommand extends Command {
    constructor() {
        super('echec', {
           aliases: ['echec'],
           description: {
            content: 'La commande echec permet de jouer aux echecs',
            usages: `${PREFIX}echec`,
            raccourcis: 'echec'
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
            this.client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'chess').then(async invite => {
            return message.channel.send(`${invite.code}`);
            });
        };
    }
}

module.exports = EchecCommand;