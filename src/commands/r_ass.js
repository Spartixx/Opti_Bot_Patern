const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const fetch = import('node-fetch');

class RealAssCommand extends Command {
    constructor() {
        super('ass', {
           aliases: ['ass', 'cul'],
           description: {
            content: 'La commande ass permet d\'envoyer une image d\'hentai',
            usages: `${PREFIX}ass`,
            raccourcis: 'ass, cul'
        },
           category: 'API',
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

    async exec(message, args) {
        const { NekoBot } = require("nekobot-api");
        const api = new NekoBot();

            const ass = await api.get("ass");
            message.channel.send({ embeds: [ 
                this.client.functions.embed() 
                    .setTitle(`***Voici votre image !***`)
                    .setURL(ass)
                    .setImage(`${ass}`)
                    .setFooter(`demandé par ${message.member.user.tag}`)
                    .setColor('#D518C9')
            ]})
        }
}

module.exports = RealAssCommand;