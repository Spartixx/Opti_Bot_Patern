const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const fetch = import('node-fetch');

class RealQuatre4Command extends Command {
    constructor() {
        super('4k', {
           aliases: ['4k'],
           description: {
            content: 'La commande 4k permet d\'envoyer une image d\'hentai',
            usages: `${PREFIX}4k`,
            raccourcis: '4k'
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
        
            const quatrek = await api.get("4k");
            message.channel.send({ embeds: [ 
                this.client.functions.embed() 
                    .setTitle(`***Voici votre image !***`)
                    .setURL(quatrek)
                    .setImage(`${quatrek}`)
                    .setFooter(`demandé par ${message.member.user.tag}`)
                    .setColor('#D518C9')
            ]})
            }
}

module.exports = RealQuatre4Command;