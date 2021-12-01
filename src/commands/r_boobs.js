const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const fetch = import('node-fetch');

class RealBoobsCommand extends Command {
    constructor() {
        super('boobs', {
           aliases: ['boobs', 'seins'],
           description: {
            content: 'La commande boobs permet d\'envoyer une image d\'hentai',
            usages: `${PREFIX}boobs`,
            raccourcis: 'boobs, seins'
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

            const boobs = await api.get("boobs");
            message.channel.send({ embeds: [ 
                this.client.functions.embed() 
                    .setTitle(`***Voici votre image !***`)
                    .setURL(boobs)
                    .setImage(`${boobs}`)
                    .setFooter(`demandé par ${message.member.user.tag}`)
                    .setColor('#D518C9')
            ]})
        }
}

module.exports = RealBoobsCommand;