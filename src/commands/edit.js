const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');


class EditCommand extends Command {
    constructor() {
        super('edit', {
           aliases: ['edit', 'e'],
           description: {
            content: 'La commande edit permet de modifier des messages !',
            usages: `${PREFIX}edit <id>`,
            raccourcis: 'edit, e'
        },
           category: 'Dev',
           ignoreCooldown: '831835872625295390',
           ignorePermissions: '831835872625295390',
           userPermissions: 'SEND_MESSAGES',
           clientPermissions: 'SEND_MESSAGES',
           ratelimit: 2,
           cooldown: 3000,
           typing: true,
           ownerOnly: false,
           channel: 'guild',
           args: [
               {id: 'command', type: 'commandAlias'},
           ]
        });
    }

    exec(message, args) {
        let arg = message.content.split(' ')
        let to_edit = arg[1]
        let msg = arg[2]

        message.channel.messages.fetch(to_edit).then(m =>{
            m.edit(msg), message.delete()
        })
    }
}

module.exports = EditCommand;