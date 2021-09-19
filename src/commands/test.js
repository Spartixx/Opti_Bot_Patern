const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');

class TestCommand extends Command {
    constructor() {
        super('test', {
           aliases: ['test', 't'],
           description: {
            content: 'La commande Test permet d\'effectuer des test sur le bot !',
            usages: `${PREFIX}test`,
            raccourcis: 'test, t'
        },
           category: 'Misc',
        });
    }

    exec(message) {
        return message.reply('Pong!');
    }
}

module.exports = TestCommand;