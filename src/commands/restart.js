const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');

class RestartCommand extends Command {
    constructor() {
        super('restart', {
           aliases: ['restart', 'rs'],
           description: {
            content: 'La commande Restart permet de redémarrer le bot depuis discord !',
            usages: `${PREFIX}restart`,
            raccourcis: 'restart, rs'
        },
           category: 'Dev',
           ownerOnly: true
        });
    }

    exec(message) {
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')
        require('child_process').execSync('pm2 restart 0')
        CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().format('LTS')} : ${message.member.user.tag} a exécuté la commande ${message.content} ${'```'}`)
    }
}

module.exports = RestartCommand;