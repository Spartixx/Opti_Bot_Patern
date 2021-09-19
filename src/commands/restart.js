const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');

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
        require('child_process').execSync('pm2 restart 0')
    }
}

module.exports = RestartCommand;