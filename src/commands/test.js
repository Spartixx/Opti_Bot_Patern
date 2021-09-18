const { Command } = require('discord-akairo');

class TestCommand extends Command {
    constructor() {
        super('test', {
           aliases: ['test'] 
        });
    }

    exec(message) {
        return message.reply('Pong!');
    }
}

module.exports = TestCommand;