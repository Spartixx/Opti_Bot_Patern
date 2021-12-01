const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const fetch = import('node-fetch');
const moment = require('moment');

class RealPussyCommand extends Command {
    constructor() {
        super('pussy', {
           aliases: ['pussy'],
           description: {
            content: 'La commande pussy permet d\'envoyer une image d\'hentai',
            usages: `${PREFIX}pussy`,
            raccourcis: 'pussy'
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
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')
        const { NekoBot } = require("nekobot-api");
        const api = new NekoBot();
      
            const pussy = await api.get("pussy");
            message.channel.send({ embeds: [ 
                this.client.functions.embed() 
                    .setTitle(`***Voici votre image !***`)
                    .setURL(pussy)
                    .setImage(`${pussy}`)
                    .setFooter(`demandé par ${message.member.user.tag}`)
                    .setColor('#D518C9')
            ]})
            CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().format('LTS')} : ${message.member.user.tag} a exécuté la commande ${message.content} ${'```'}`)
    }
}

module.exports = RealPussyCommand;