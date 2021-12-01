const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const fetch = import('node-fetch');

class HentaiAnalCommand extends Command {
    constructor() {
        super('hentai_anal', {
           aliases: ['hentai_anal','h_anal'],
           description: {
            content: 'La commande hentai_anal permet d\'envoyer une image d\'hentai',
            usages: `${PREFIX}hentai_anal`,
            raccourcis: 'hentai_anal, h_anal'
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

            const anal_hentai = await api.get("hanal");
            message.channel.send({ embeds: [ 
                this.client.functions.embed() 
                    .setTitle(`***Voici votre image !***`)
                    .setURL(anal_hentai)
                    .setImage(`${anal_hentai}`)
                    .setFooter(`demandé par ${message.member.user.tag}`)
                    .setColor('#D518C9')
            ]})
            }
}

module.exports = HentaiAnalCommand;