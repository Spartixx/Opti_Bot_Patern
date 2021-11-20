const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');

class TwitchCommand extends Command {
    constructor() {
        super('twitch', {
           aliases: ['twitch','tw'],
           description: {
            content: 'La commande Twitch permet de voir quand NoX-FrYz-_- est en Live !',
            usages: `${PREFIX}Twitch -<nom du live>`,
            raccourcis: 'twitch, tw'
        },
           category: 'Modération',
        });
    }

    async exec(message) {
        const Twitch = "https://www.twitch.tv/fryz__1";
        const guild = message.guild;
        const annonce_channel = guild.channels.cache.get('911746111864193054')
        let args = message.content.split('-');

        return annonce_channel.send({ embeds: [
            this.client.functions.embed()
                .setTitle('***__NoX-FrYz-_- est en Live !__***')
                .addField('📱 Titre du live 📱', args[1], false)
                .addField('🌐 Lien du live 🌐', `[Clique ici pour t\'y rendre](${Twitch})`, true)
        ]
        }).then(annonce_channel.send('@everyone'))
    }
}

module.exports = TwitchCommand;