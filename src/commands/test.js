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
           ignoreCooldown: '831835872625295390',
           ignorePermissions: '831835872625295390',
           userPermissions: 'ADMINISTRATOR',
           clientPermissions: 'ADMINISTRATOR',
           ratelimit: 2,
           cooldown: 3000,
           typing: true,
           ownerOnly: false,
           channel: 'guild',
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