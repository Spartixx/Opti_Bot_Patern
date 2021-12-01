const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const fetch = import('node-fetch');

class HentaiBoobsCommand extends Command {
    constructor() {
        super('hentai_boobs', {
           aliases: ['hentai_boobs','h_boobs'],
           description: {
            content: 'La commande hentai_boobs permet d\'envoyer une image d\'hentai',
            usages: `${PREFIX}hentai_boobs`,
            raccourcis: 'hentai_boobs, h_boobs'
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
  
            const boobs_hentai = await api.get("hboobs");
            message.channel.send({ embeds: [ 
                this.client.functions.embed() 
                    .setTitle(`***Voici votre image !***`)
                    .setURL(boobs_hentai)
                    .setImage(`${boobs_hentai}`)
                    .setFooter(`demandé par ${message.member.user.tag}`)
                    .setColor('#D518C9')
            ]})
            }
}

module.exports = HentaiBoobsCommand;