const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');

class TestCommand extends Command {
    constructor() {
        super('test', {
           aliases: ['test'],
           description: {
            content: 'Pour faire un test, tout simplement ^^',
            usages: `${PREFIX}test`,
            raccourcis: 'test'
        },
           category: 'Dev',
        });
    }

    async exec(message, interactionCreate, interaction) {
        const bouton = new MessageActionRow().addComponents(new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('PRIMARY')
        .setCustomId('unban'))

        await message.reply({content: `test`, components: [bouton]})
    }
}

module.exports = TestCommand;