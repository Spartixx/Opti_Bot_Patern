const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');

class StartCommand extends Command {
    constructor() {
        super('start', {
           aliases: ['start'],
           description: {
            content: 'La commande start permet de démarrer le bot depuis discord !',
            usages: `${PREFIX}start`,
            raccourcis: 'start'
        },
           category: 'Dev',
           ownerOnly: true
        });
    }

    exec(message) {
        require('child_process').execSync('pm2 start index.js')
    }
}

module.exports = StartCommand;