const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');

class WordsSnackCommand extends Command {
    constructor() {
        super('words_snack', {
           aliases: ['words_snack'],
           description: {
            content: 'La commande words_snack permet de jouer à Words Snack !',
            usages: `${PREFIX}words_snack`,
            raccourcis: 'words_snack'
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
            this.client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'wordsnack').then(async invite => {
            return message.channel.send(`${invite.code}`);
            });
        };
    }
}

module.exports = WordsSnackCommand;