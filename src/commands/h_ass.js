const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const fetch = import('node-fetch');

class HentaiAssCommand extends Command {
    constructor() {
        super('hentai_ass', {
           aliases: ['hentai_ass','h_ass'],
           description: {
            content: 'La commande hentai_ass permet d\'envoyer une image d\'hentai',
            usages: `${PREFIX}hentai_ass`,
            raccourcis: 'hentai_ass, h_ass'
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
    
            const ass_hentai = await api.get("hass");
            message.channel.send({ embeds: [ 
                this.client.functions.embed() 
                    .setTitle(`***Voici votre image !***`)
                    .setURL(ass_hentai)
                    .setImage(`${ass_hentai}`)
                    .setFooter(`demandé par ${message.member.user.tag}`)
                    .setColor('#D518C9')
            ]})
            }
}

module.exports = HentaiAssCommand;